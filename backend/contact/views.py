from rest_framework.generics import ListAPIView
from rest_framework import permissions

from .models import Contact
from .serializers import ContactSerializer


class ContactListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Contact.objects.all()
  serializer_class = ContactSerializer
  pagination_class = None
