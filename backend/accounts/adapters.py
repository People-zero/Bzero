from allauth.account.adapter import DefaultAccountAdapter


class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        data = form.cleaned_data
        # 기본 저장 필드: first_name, last_name, username, email
        user = super().save_user(request, user, form, False)
        # 추가 저장 필드: profile_image
        profile_image = data.get("profile_image")
        if profile_image:
            user.profile_image = profile_image

        birth = data.get("birth")
        if birth:
            user.birth = birth

        age = data.get("age")
        if age:
            user.age = age

        phone_number = data.get("phone_number")
        if phone_number:
            user.phone_number = phone_number

        is_staff = data.get("is_staff")
        if is_staff:
            user.is_staff = is_staff

        gender = data.get("gender")
        if gender:
            user.gender = gender

        user.save()
        return user
