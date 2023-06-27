from django.contrib import admin
from .models import Contact


class ContactAdmin(admin.ModelAdmin):
  list_display = ('address', 'email')
  list_display_links = ('email',)
  search_fields = ('address', 'email')
  list_per_page = 20


admin.site.register(Contact, ContactAdmin)
