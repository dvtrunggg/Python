from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.postgres.fields import JSONField

# Create your models here.

class Products(models.Model):
    path = models.CharField(max_length=255)
    price = models.IntegerField(default=0)
    product_name = models.CharField(max_length=255)
    description = models.CharField(max_length=500)
    currency = models.CharField(max_length=10)
    type_product = models.CharField(max_length=50)
    count = models.IntegerField(default=0)
    sold = models.IntegerField(default=0)

class Card(models.Model):
    username = models.CharField(max_length=255, primary_key=True)
    list_cart = ArrayField(JSONField(None), default=None, blank=True, null=True)
    

