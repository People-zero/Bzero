from rest_framework.routers import DefaultRouter
from . import views
from . import models

router = DefaultRouter()
router.register("posts", views.PostViewSet, basename = models.Post)
router.register(r"posts/(?P<post_pk>\d+)/comments", views.CommentViewSet, basename = models.Comment)
