from rest_framework import serializers
from motion.models import Motion, Category, Tournament

class TournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class MotionSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()    
    tournament = serializers.SerializerMethodField()
    class Meta:
        model = Motion
        fields = '__all__'
        
    def get_category(self, obj):
        return obj.category.name if obj.category else None
    def get_tournament(self, obj):
        return obj.tournament.name if obj.tournament else None