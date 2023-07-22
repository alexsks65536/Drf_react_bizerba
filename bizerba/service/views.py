from rest_framework.viewsets import ModelViewSet
from .models import Customer
from .serializers import CustomerModelSerializer


class CustomerModelViewSet(ModelViewSet):
   queryset = Customer.objects.all()
   serializer_class = CustomerModelSerializer

