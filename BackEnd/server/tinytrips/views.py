from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from rest_framework.viewsets import ViewSet
from .serializers import ContactSerializer
from rest_framework.decorators import permission_classes, throttle_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle


# Create your views here.

def testView(request):
    return HttpResponse('Hey there!')

class ContactView(ViewSet):
    permission_classes = [IsAuthenticated]
    throttle_classes = [UserRateThrottle]
    def create(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message' : 'Resource created successfully!', 'resource' : serializer.data})
        else:
            return Response({'message' : 'Resource is not valid!', 'error':serializer.errors})
