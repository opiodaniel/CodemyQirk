from rest_framework import generics, status, views
from rest_framework.response import Response
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_str, smart_bytes, smart_str, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework.permissions import IsAuthenticated

from .serializers import (
    RegisterSerializer, ChangePasswordSerializer,
    PasswordResetRequestSerializer, PasswordResetConfirmSerializer
)

User = get_user_model()

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            if not user.check_password(serializer.data.get("old_password")):
                return Response({"old_password": "Wrong password."}, status=status.HTTP_400_BAD_REQUEST)
            user.set_password(serializer.data.get("new_password"))
            user.save()
            return Response({"detail": "Password updated successfully."})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PasswordResetRequestView(views.APIView):
    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            try:
                user = User.objects.get(email=email)
                uid = urlsafe_base64_encode(smart_bytes(user.id))
                token = PasswordResetTokenGenerator().make_token(user)
                reset_url = f"http://localhost:3000/reset-password-confirm/{uid}/{token}/"

                send_mail(
                    "Password Reset Request",
                    f"Click the link to reset your password: {reset_url}",
                    "noreply@elearn.com",
                    [user.email]
                )
                return Response({"detail": "Password reset email sent."}, status=200)
            except User.DoesNotExist:
                return Response({"detail": "User not found with this email."}, status=404)
        return Response(serializer.errors, status=400)


class PasswordResetConfirmView(views.APIView):
    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        if serializer.is_valid():
            try:
                uid = smart_str(urlsafe_base64_decode(serializer.validated_data['uidb64']))
                user = User.objects.get(id=uid)
                token = serializer.validated_data['token']

                if not PasswordResetTokenGenerator().check_token(user, token):
                    return Response({'error': 'Invalid or expired token'}, status=400)

                user.set_password(serializer.validated_data['new_password'])
                user.save()
                return Response({"detail": "Password has been reset successfully."})
            except (DjangoUnicodeDecodeError, User.DoesNotExist):
                return Response({'error': 'Invalid UID'}, status=400)
        return Response(serializer.errors, status=400)
