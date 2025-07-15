from django.contrib.auth.models import AbstractUser
from django.db import models

# Custom user
class User(AbstractUser):
    is_student = models.BooleanField(default=True)
    is_instructor = models.BooleanField(default=False)

    def __str__(self):
        return self.username
