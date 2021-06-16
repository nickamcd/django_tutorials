from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = '__all__' # set fields to all attributes in model

class CreateRoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = ('guest_can_pause', 'votes_to_skip')