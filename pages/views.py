from django.shortcuts import render


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


def contact_view(request):
    """
    Renders contact form on contact page with any relevant information
    the user has already provided in the name and email fields.
    """
    return render(request, 'contact.html')


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