from django.db import models

# Language Choices Enum
class LanguageChoices(models.TextChoices):
    ENGLISH = "EN", "English"
    BANGLA = "BN", "Bangla"


class Tournament(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Tournament'
        verbose_name_plural = 'Tournaments'

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Motion(models.Model):
    language = models.CharField(
        max_length=2,
        choices=LanguageChoices.choices,
        default=LanguageChoices.ENGLISH
    )
    category = models.ForeignKey(
        Category,
        related_name='motions',
        on_delete=models.CASCADE
    )
    title = models.TextField()
    info_slide = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    tournament = models.ForeignKey(
        Tournament,
        related_name='motions',
        on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Motion'
        verbose_name_plural = 'Motions'

    def __str__(self):
        return f"{self.title} - {self.get_language_display()}"
