# Generated by Django 3.2.8 on 2021-12-17 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Local', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='local',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
