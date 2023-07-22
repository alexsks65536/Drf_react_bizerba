from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Customer


class CustomerModelSerializer(HyperlinkedModelSerializer):
   class Meta:
       model = Customer
       fields = '__all__'
