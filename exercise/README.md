### Bài tập buổi 1.

- Từ file markup tĩnh (index.html, index.css), các bạn hãy dựng thành các component cần thiết để có UI như hình dưới đây:
  ![alt text](image.png)
- Từ data sample ở file `data.js`. Các bạn hãy dùng những kĩ thuật cần thiết để ghép data vào component vừa dựng được ở trên để tạo thành UI hoàn chỉnh.

### Bài tập buổi 2.
- Call API: https://dev.to/api/articles?tag= lấy data thay vì sử dụng sample data ở buổi 1, và ghép data lấy được từ API vào component như buổi 1.
- Thực hiện search bài viết theo `tag`.
- API sample response:
```
[
  {
    "type_of": "article",
    "id": 194541,
    "title": "There's a new DEV theme in town for all you 10x hackers out there (plus one actually useful new feature)",
    "description": "",
    "cover_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--74Bl23tz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--xU8cbIK4--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/8a39dzf3oovzc2snl7iv.png",
    "readable_publish_date": "Oct 24",
    "social_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--SeMxdKIa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--xU8cbIK4--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/8a39dzf3oovzc2snl7iv.png",
    "tag_list": [
      "meta",
      "changelog",
      "css",
      "ux"
    ],
    "tags": "meta, changelog, css, ux",
    "slug": "there-s-a-new-dev-theme-in-town-for-all-you-10x-hackers-out-there-plus-one-actually-useful-new-feature-2kgk",
    "path": "/devteam/there-s-a-new-dev-theme-in-town-for-all-you-10x-hackers-out-there-plus-one-actually-useful-new-feature-2kgk",
    "url": "https://dev.to/devteam/there-s-a-new-dev-theme-in-town-for-all-you-10x-hackers-out-there-plus-one-actually-useful-new-feature-2kgk",
    "canonical_url": "https://dev.to/devteam/there-s-a-new-dev-theme-in-town-for-all-you-10x-hackers-out-there-plus-one-actually-useful-new-feature-2kgk",
    "comments_count": 37,
    "positive_reactions_count": 12,
    "public_reactions_count": 142,
    "collection_id": null,
    "created_at": "2019-10-24T13:41:29Z",
    "edited_at": "2019-10-24T13:56:35Z",
    "crossposted_at": null,
    "published_at": "2019-10-24T13:52:17Z",
    "last_comment_at": "2019-10-25T08:12:43Z",
    "published_timestamp": "2019-10-24T13:52:17Z",
    "reading_time_minutes": 15,
    "user": {
      "name": "Ben Halpern",
      "username": "ben",
      "twitter_username": "bendhalpern",
      "github_username": "benhalpern",
      "website_url": "http://benhalpern.com",
      "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--Y1sq1tFG--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png",
      "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--DcW51A6v--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png"
    },
    "organization": {
      "name": "The DEV Team",
      "username": "devteam",
      "slug": "devteam",
      "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--0kDBq1Ne--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://thepracticaldev.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png",
      "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--8tTU-XkZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png"
    }
  }
]
```
