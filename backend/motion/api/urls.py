from django.urls import path, include
from rest_framework.routers import DefaultRouter
from  .views import MotionViewSet, CategoryViewSet, TournamentViewSet
router = DefaultRouter()
router.register(r'motion', MotionViewSet, basename='motion')
router.register(r'category', CategoryViewSet, basename='category')
router.register(r'tournament', TournamentViewSet, basename='tournament')


urlpatterns = [
    path('api/', include(router.urls)),

]