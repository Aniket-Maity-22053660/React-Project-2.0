from django.urls import path, include
from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('save', views.ContactView, basename='save')
urlpatterns = [
    path('test/', views.testView),
    path('', include(router.urls)),
]