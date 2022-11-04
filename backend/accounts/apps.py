from django.apps import AppConfig


class AccountsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "accounts"

class ProfilesConfig(AppConfig):
    name = 'profiles'

    def ready(self):
        import accounts.signals


