# Generated by Django 3.2.8 on 2021-12-17 19:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Silla', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('nombre', models.CharField(max_length=50)),
                ('precio', models.IntegerField()),
                ('silla', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Silla.silla')),
            ],
        ),
    ]