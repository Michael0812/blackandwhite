from django.shortcuts import render


# Create your views here.
def index(request):
    """
    A view that displays the index page
    """
    return render(request, 'index.html')


def delivery(request):
    """
    a view that displays page with delivery information
    """
    return render(request, 'delivery.html')
