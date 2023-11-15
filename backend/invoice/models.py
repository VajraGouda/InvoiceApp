from django.db import models
from django.core.validators import MinValueValidator


class Invoices(models.Model):
    invoice_id = models.IntegerField()
    client_name = models.CharField(max_length=200)
    date = models.DateField()


class Items(models.Model):
    invoices = models.ForeignKey(Invoices, on_delete=models.CASCADE, related_name="items")
    desc = models.TextField()
    rate = models.FloatField()
    quantity = models.IntegerField()


class User(models.Model):
    user_id = models.IntegerField()
    name = models.CharField(max_length=200, validators=[
                            MinValueValidator("2")])
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=200, validators=[
                                MinValueValidator("6")])
