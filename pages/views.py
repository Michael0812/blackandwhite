from django.shortcuts import render
from django.contrib import messages


# Create your views here.
def index_view(request):
    """
    A view that displays the index page
    """
    return render(request, 'index.html')


def delivery_view(request):
    """
    A view that displays page with delivery information
    """
    return render(request, 'delivery.html')


def terms_view(request):
    """
    A view that displays page with terms & conditions
    """
    return render(request, 'terms.html')


def about_view(request):
    """
    A view that displays the page about company
    """
    return render(request, 'about.html')


def shops_view(request):
    """
    A view that displays the page about company
    """
    return render(request, 'shops.html')


def contact_view(request):
    """
    A view that displays contact page - User are allowed there to
    send a message to the admin
    """
    if request.method == "POST":
        messages.success(request, "Thanks, we have received your message")
    return render(request, 'contact.html')
