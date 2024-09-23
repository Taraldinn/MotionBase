from rest_framework import viewsets
from motion.models import Category, Tournament
from .serializers import MotionSerializer, CategorySerializer, TournamentSerializer
from ..models import Motion


# Create your views here.

class MotionViewSet(viewsets.ModelViewSet):
    queryset = Motion.objects.all()
    serializer_class = MotionSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TournamentViewSet(viewsets.ModelViewSet):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer

