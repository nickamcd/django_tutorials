from django.shortcuts import render
from .models import Post

posts = [
  {
    'author': 'NickMcD', 
    'title': 'Blog Post 1', 
    'content': 'First post content',
    'date_posted': 'June 11, 2021'
  },
  {
    'author': 'JaneDoe', 
    'title': 'Blog Post 2', 
    'content': 'Second post content',
    'date_posted': 'June 12, 2021'
  },
]

# Create your views here.
def home(request):
  context = {
    'posts': Post.objects.all()
  }
  return render(request, 'blog/home.html', context)

def about(request):
  return render(request, 'blog/about.html', {'title': 'About'})