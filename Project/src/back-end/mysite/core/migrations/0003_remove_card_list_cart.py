# Generated by Django 3.0.5 on 2020-12-09 09:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_card_list_cart'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='card',
            name='list_cart',
        ),
    ]
