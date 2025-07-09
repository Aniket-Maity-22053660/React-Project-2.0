from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=17)
    email = models.EmailField(max_length=255)
    message = models.TextField(max_length=400)
def __str__(self):
    return f'{self.name} - {self.email}'