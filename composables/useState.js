export const useSearch = () => useState("search-collapse", () => false);
export const useStage = () => useState("stage", () => null);
export const useCounter = () => useState("counter", () => 0);
export const useSearchType = () => useState("search-type", () => "Account");
export const useFollowMode = () => useState("follow-mode", () => "");
export const useExploreType = () => useState("explore-type", () => "Skills");
export const useProfileTab = () => useState("profile-tab", () => "Post");
export const useAccountTab = () => useState("account-tab", () => "Post");
export const useExploreModeType = () =>
  useState("explore-type-mode", () => "Food");
export const usePlace = () =>
  useState("place", () => {
    title: "";
  });
export const useAccount = () =>
  useState("account", () => {
    title: "";
    avatar: "";
  });
export const useHashtag = () =>
  useState("hashtag", () => {
    title: "";
    description: "";
  });
export const useMutualFriends = () =>
  useState("mutual-friends-collapse", () => false);

//postList

import sarah_smith from "~/assets/images/avatars/sarah_smith.jpg";
import ema_watson from "~/assets/images/avatars/ema_watson.jpg";
import avatar6 from "~/assets/images/avatars/avatar6.jpg";
import avatar7 from "~/assets/images/avatars/avatar7.jpg";
import avatar8 from "~/assets/images/avatars/avatar8.jpg";
import avatar9 from "~/assets/images/avatars/avatar9.jpg";
import avatar10 from "~/assets/images/avatars/avatar10.jpg";
import sarah_smit_post_1 from "~/assets/images/posts/sarah-smit-post-1.jpg";
import sarah_smit_post_2 from "~/assets/images/posts/sarah-smit-post-2.jpg";
import sarah_smit_post_3 from "~/assets/images/posts/sarah-smit-post-3.jpg";
import sarah_smit_post_4 from "~/assets/images/posts/sarah-smit-post-4.jpg";
import sarah_smit_post_5 from "~/assets/images/posts/sarah-smit-post-5.jpg";
import sarah_smit_post_6 from "~/assets/images/posts/sarah-smit-post-6.jpg";
import emma_watson_post_1 from "~/assets/images/posts/emma-watson-post-1.jpg";
import emma_watson_post_2 from "~/assets/images/posts/emma-watson-post-2.jpg";

import sarah_smith_story_1 from "~/assets/images/stories/sarah_smith_story_1.webp";
import sarah_smith_story_2 from "~/assets/images/stories/sarah_smith_story_2.jpeg";
import sarah_smith_story_3 from "~/assets/images/stories/ema_watson_story_1.jpg";
import sarah_smith_story_4 from "~/assets/images/stories/ema_watson_story_2.jpg";
import sarah_smith_story_5 from "~/assets/images/posts/sarah-smit-post-4.jpg";
import sarah_smith_story_6 from "~/assets/images/posts/sarah-smit-post-5.jpg";
import sarah_smith_story_7 from "~/assets/images/posts/sarah-smit-post-6.jpg";
import sarah_smith_story_8 from "~/assets/images/posts/emma-watson-post-1.jpg";
import sarah_smith_story_9 from "~/assets/images/posts/emma-watson-post-2.jpg";

import emma_watson_story_1 from "@/assets/images/hashtags/hashtag-1.png";
import emma_watson_story_2 from "@/assets/images/hashtags/hashtag-2.png";
import emma_watson_story_3 from "@/assets/images/hashtags/hashtag-3.png";
import emma_watson_story_4 from "@/assets/images/hashtags/hashtag-4.png";
import emma_watson_story_5 from "@/assets/images/hashtags/hashtag-5.png";
import emma_watson_story_6 from "@/assets/images/hashtags/hashtag-6.png";
import emma_watson_story_7 from "@/assets/images/hashtags/hashtag-7.png";
import emma_watson_story_8 from "@/assets/images/hashtags/hashtag-8.png";
import emma_watson_story_9 from "@/assets/images/hashtags/hashtag-9.png";

export const usePosts = () =>
  useState("posts", () => [
    {
      id: 1,
      authorId: 1,
      avatar: sarah_smith,
      name: "sarah smith",
      location: "Toronto, Canada",
      dateOfRelease: " 28 min ago",
      image: sarah_smit_post_1,
      views: 1125,
      likes: 126,
      comments: 3,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 2,
      authorId: 2,
      avatar: ema_watson,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 60 min ago",
      image: emma_watson_post_1,
      views: 3562,
      likes: 520,
      comments: 10,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 3,
      authorId: 1,
      avatar: sarah_smith,
      name: "sarah smith",
      location: "Toronto, Canada",
      dateOfRelease: " 45 min ago",
      image: sarah_smit_post_2,
      views: 11,
      likes: 5,
      comments: 10,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 4,
      authorId: 2,
      avatar: ema_watson,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 34 min ago",
      image: emma_watson_post_2,
      views: 3562,
      likes: 520,
      comments: 10,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 5,
      authorId: 1,
      avatar: sarah_smith,
      name: "sarah smith",
      location: "Toronto, Canada",
      dateOfRelease: " 12 min ago",
      image: sarah_smit_post_3,
      views: 110,
      likes: 56,
      comments: 100,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 6,
      authorId: 2,
      avatar: ema_watson,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 15 min ago",
      image: sarah_smith_story_1,
      views: 1599,
      likes: 263,
      comments: 24,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 7,
      authorId: 1,
      avatar: sarah_smith,
      name: "sarah smith",
      location: "Toronto, Canada",
      dateOfRelease: " 20 min ago",
      image: sarah_smit_post_4,
      views: 11,
      likes: 5,
      comments: 10,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 8,
      authorId: 1,
      avatar: sarah_smith,
      name: "sarah smith",
      location: "Toronto, Canada",
      dateOfRelease: " 20 min ago",
      image: sarah_smit_post_5,
      views: 15,
      likes: 5,
      comments: 10,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 9,
      authorId: 1,
      avatar: sarah_smith,
      name: "sarah smith",
      location: "Toronto, Canada",
      dateOfRelease: " 20 min ago",
      image: sarah_smit_post_6,
      views: 152,
      likes: 51,
      comments: 105,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 10,
      authorId: 2,
      avatar: ema_watson,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 12 min ago",
      image: emma_watson_post_2,
      views: 110,
      likes: 56,
      comments: 100,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 11,
      authorId: 1,
      avatar: sarah_smith,
      name: "sarah smith",
      location: "Toronto, Canada",
      dateOfRelease: " 12 min ago",
      image: sarah_smit_post_3,
      views: 110,
      likes: 56,
      comments: 100,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 12,
      authorId: 2,
      avatar: ema_watson,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 15 min ago",
      image: sarah_smith_story_1,
      views: 1599,
      likes: 263,
      comments: 24,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 13,
      authorId: 2,
      avatar: ema_watson,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 15 min ago",
      image: sarah_smith_story_2,
      views: 1599,
      likes: 263,
      comments: 24,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 14,
      authorId: 2,
      avatar: ema_watson,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 15 min ago",
      image: sarah_smith_story_3,
      views: 1599,
      likes: 263,
      comments: 24,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 15,
      authorId: 2,
      avatar: ema_watson,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 15 min ago",
      image: sarah_smith_story_4,
      views: 1599,
      likes: 263,
      comments: 24,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 16,
      authorId: 3,
      avatar: avatar6,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 15 min ago",
      image: sarah_smith_story_4,
      views: 1599,
      likes: 263,
      comments: 24,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 17,
      authorId: 3,
      avatar: avatar6,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 34 min ago",
      image: music1,
      views: 1599,
      likes: 263,
      comments: 7,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 18,
      authorId: 3,
      avatar: avatar6,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 34 min ago",
      image: music2,
      views: 531,
      likes: 263,
      comments: 7,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 19,
      authorId: 3,
      avatar: avatar6,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 34 min ago",
      image: music3,
      views: 666,
      likes: 263,
      comments: 7,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 20,
      authorId: 3,
      avatar: avatar6,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 34 min ago",
      image: music4,
      views: 1432,
      likes: 263,
      comments: 7,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 21,
      authorId: 3,
      avatar: avatar6,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 34 min ago",
      image: food1,
      views: 1432,
      likes: 263,
      comments: 7,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 22,
      authorId: 3,
      avatar: avatar6,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 34 min ago",
      image: food2,
      views: 1432,
      likes: 263,
      comments: 7,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 23,
      authorId: 3,
      avatar: avatar6,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 34 min ago",
      image: food3,
      views: 1432,
      likes: 263,
      comments: 7,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
    {
      id: 24,
      authorId: 3,
      avatar: avatar6,
      name: "Emma Watson",
      location: "Toronto, Canada",
      dateOfRelease: " 34 min ago",
      image: food4,
      views: 1432,
      likes: 263,
      comments: 7,
      caption:
        "I love surfing in the bright sunlight. A sport that is more exciting than anything for me and my friends and also it can be more paragraph when you want to keep this method.",
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      isLiked: false,
    },
  ]);

//userList

export const useUsers = () =>
  useState("users", () => [
    {
      id: 1,
      title: "sarah smith ",
      description: "@meg-sth, grade: Middle 7, Toronto",
      avatar: sarah_smith,
      isStoryVisited: false,
      isPublic: false,
      isRequested: false,
      isBlocked: false,
      isReported: false,
      followers: [
        {
          id: 2,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: ema_watson,
          isStoryVisited: false,
        },
        {
          id: 3,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: avatar6,
          isStoryVisited: false,
        },
      ],
      followings: [
        {
          id: 2,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: ema_watson,
          isStoryVisited: false,
        },
        {
          id: 3,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: avatar6,
          isStoryVisited: false,
        },
      ],
      followRequests: [
        {
          id: 4,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: ema_watson,
          isStoryVisited: false,
        },
        {
          id: 5,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: avatar6,
          isStoryVisited: false,
        },
      ],
    },
    {
      id: 2,
      title: "Emma Watson",
      description: "@megan-smith-2004, grade: Middle 6, Montreal",
      avatar: ema_watson,
      isStoryVisited: true,
      isPublic: true,
      isRequested: false,
      isBlocked: false,
      isReported: false,
      followers: [
        {
          id: 1,
          title: "sarah smith ",
          description: "@meg-sth, grade: Middle 7, Toronto",
          avatar: sarah_smith,
          isStoryVisited: false,
        },
        {
          id: 3,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: avatar6,
          isStoryVisited: false,
        },
      ],
      followings: [
        {
          id: 1,
          title: "sarah smith ",
          description: "@meg-sth, grade: Middle 7, Toronto",
          avatar: sarah_smith,
          isStoryVisited: false,
        },
        {
          id: 3,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: avatar6,
          isStoryVisited: false,
        },
      ],
      followRequests: [
        {
          id: 4,
          title: "sarah smith ",
          description: "@meg-sth, grade: Middle 7, Toronto",
          avatar: sarah_smith,
          isStoryVisited: false,
        },
        {
          id: 5,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: avatar6,
          isStoryVisited: false,
        },
      ],
    },
    {
      id: 3,
      title: "Emma Watson",
      description: "@megan-smith-2004, grade: Middle 6, Montreal",
      avatar: avatar6,
      isStoryVisited: false,
      isPublic: true,
      isBlocked: false,
      isReported: false,
      followers: [
        {
          id: 1,
          title: "sarah smith ",
          description: "@meg-sth, grade: Middle 7, Toronto",
          avatar: sarah_smith,
          isStoryVisited: false,
        },
        {
          id: 2,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: ema_watson,
          isStoryVisited: false,
        },
      ],
      followings: [
        {
          id: 1,
          title: "sarah smith ",
          description: "@meg-sth, grade: Middle 7, Toronto",
          avatar: sarah_smith,
          isStoryVisited: false,
        },
        {
          id: 2,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: ema_watson,
          isStoryVisited: false,
        },
      ],
      followRequests: [
        {
          id: 4,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: avatar8,
          isStoryVisited: false,
        },
        {
          id: 5,
          title: "Emma Watson ",
          description: "@megan-smith-2004, grade: Middle 6, Montreal",
          avatar: avatar9,
          isStoryVisited: false,
        },
      ],
    },
  ]);

//placeList

export const usePlaces = () =>
  useState("places", () => [
    {
      id: 1,
      title: "cafe radio ",
      description: "No 9. Lorem Alley, Toronto, Ca",
    },
    {
      id: 2,
      title: "cafe lotus",
      description: "No 9. Lorem Alley, Toronto, Ca",
    },
  ]);

//HashtagList

export const useHashtags = () =>
  useState("hashtags", () => [
    {
      title: "#book",
      description: "44.6M Media",
    },
    {
      title: "#bookstagram",
      description: "44.6M Media",
    },
    {
      title: "#bookmark",
      description: "21.9M Media",
    },
    {
      title: "#bookshelf",
      description: "19.9M Media",
    },
    {
      title: "#books",
      description: "17.3M Media",
    },
    {
      title: "#booklover",
      description: "14.1M Media",
    },
  ]);

//story collapse

export const useNavigation = () => useState("Navigation", () => false);

export const useStoryList = () =>
  useState("story-list", () => [
    {
      userId: 1,
      slides: [
        {
          id: 1,
          image: sarah_smith_story_1,
          isVisited: false,
        },
        {
          id: 2,
          image: sarah_smith_story_2,
          isVisited: false,
        },
      ],
    },
    {
      userId: 2,
      slides: [
        {
          id: 3,
          image: sarah_smith_story_3,
          isVisited: true,
        },
        {
          id: 4,
          image: sarah_smith_story_4,
          isVisited: true,
        },
      ],
    },
    {
      userId: 3,
      slides: [],
    },
  ]);

import music1 from "~/assets/images/explore/music/1.jpg";
import music2 from "~/assets/images/explore/music/2.jpg";
import music3 from "~/assets/images/explore/music/3.webp";
import music4 from "~/assets/images/explore/music/4.jpg";
import food1 from "~/assets/images/posts/sarah-smit-post-3.jpg";
import food2 from "~/assets/images/posts/emma-watson-post-1.jpg";
import food3 from "~/assets/images/explore/food/food3.jpeg";
import food4 from "~/assets/images/explore/food/food4.jpg";
import fashion1 from "~/assets/images/posts/sarah-smit-post-1.jpg";
import fashion2 from "~/assets/images/stories/sarah_smith_story_1.webp";
import fashion3 from "~/assets/images/stories/ema_watson_story_2.jpg";
import fashion4 from "~/assets/images/stories/sarah_smith_story_2.jpeg";
import life1 from "~/assets/images/stories/ema_watson_story_1.jpg";
import life2 from "~/assets/images/posts/sarah-smit-post-6.jpg";
import life3 from "~/assets/images/posts/sarah-smit-post-2.jpg";
import life4 from "~/assets/images/posts/sarah-smit-post-5.jpg";
import style1 from "~/assets/images/explore/style/style1.webp";
import style2 from "~/assets/images/explore/style/style2.webp";
import style3 from "~/assets/images/explore/style/style3.jpg";
import style4 from "~/assets/images/explore/style/style4.jpg";
import connection1 from "~/assets/images/explore/connection/connection1.jpg";
import connection2 from "~/assets/images/explore/connection/connection2.jpg";
import connection3 from "~/assets/images/explore/connection/connection3.jpg";
import connection4 from "~/assets/images/explore/connection/connection4.jpg";

export const useExploreList = () =>
  useState("explore-list", () => [
    // music
    {
      src: music1,
      tags: ["Music", "Posts"],
      id: 1,
    },
    {
      src: music2,
      tags: ["Music", "Questions"],
      id: 2,
    },
    {
      src: music3,
      tags: ["Music", "Skills"],
      id: 3,
    },
    {
      src: music4,
      tags: ["Music"],
      id: 4,
    },
    // food
    {
      src: food1,
      tags: ["Food", "Skills"],
      id: 5,
    },
    {
      src: food2,
      tags: ["Food", "Posts"],
      id: 6,
    },
    {
      src: food3,
      tags: ["Food", "Questions"],
      id: 7,
    },
    {
      src: food4,
      tags: ["Food"],
      id: 8,
    },
    // fashion
    {
      src: fashion1,
      tags: ["Fashion", "Questions"],
      id: 9,
    },
    {
      src: fashion2,
      tags: ["Fashion", "Posts"],
      id: 10,
    },
    {
      src: fashion3,
      tags: ["Fashion", "Skills"],
      id: 11,
    },
    {
      src: fashion4,
      tags: ["Fashion"],
      id: 12,
    },
    // life
    {
      src: life1,
      tags: ["life style", "Posts"],
      id: 13,
    },
    {
      src: life2,
      tags: ["life style", "Skills"],
      id: 14,
    },
    {
      src: life3,
      tags: ["life style", "Questions"],
      id: 15,
    },
    {
      src: life4,
      tags: ["life style"],
      id: 16,
    },
    //style
    {
      src: style1,
      tags: ["style", "Questions"],
      id: 17,
    },
    {
      src: style2,
      tags: ["style", "Posts"],
      id: 18,
    },
    {
      src: style3,
      tags: ["style", "Skills"],
      id: 19,
    },
    {
      src: style4,
      tags: ["style"],
      id: 20,
    },
    //connections
    {
      src: connection1,
      tags: ["connections", "Posts"],
      id: 21,
    },
    {
      src: connection2,
      tags: ["connections", "Skills"],
      id: 22,
    },
    {
      src: connection3,
      tags: ["connections", "Questions"],
      id: 23,
    },
    {
      src: connection4,
      tags: ["connections"],
      id: 24,
    },
    {
      src: place1,
      tags: ["Questions"],
      id: 25,
    },
    {
      src: place2,
      tags: ["Posts"],
      id: 26,
    },
    {
      src: place4,
      tags: ["Skills"],
      id: 27,
    },
  ]);

//place

import place1 from "@/assets/images/places/place-1.png";
import place2 from "@/assets/images/places/place-2.png";
import place3 from "@/assets/images/places/place-3.png";
import place4 from "@/assets/images/places/place-4.png";
import place5 from "@/assets/images/places/place-5.jpg";
import place6 from "@/assets/images/places/place-6.jpg";
import place7 from "@/assets/images/places/place-7.jpg";
import place8 from "@/assets/images/places/place-8.jpg";

export const usePlaceImageList = () =>
  useState("place-image-list", () => [
    // Recent
    {
      src: place1,
      tags: ["Recent"],
    },
    {
      src: place2,
      tags: ["Recent"],
    },
    {
      src: place3,
      tags: ["Recent"],
    },
    {
      src: place4,
      tags: ["Recent"],
    },
    //Top
    {
      src: place5,
      tags: ["Top"],
    },
    {
      src: place6,
      tags: ["Top"],
    },
    {
      src: place7,
      tags: ["Top"],
    },
    {
      src: place8,
      tags: ["Top"],
    },
  ]);

//Q and A

export const useQuestionsAndAnswers = () =>
  useState("questions-list", () => [
    {
      authorId: 1,
      id: "1",
      image: "/assets/images/answers/answer1.png",
      avatar: avatar6,
      name: "Emma Watson",
      time: "28 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 901,
      isLiked: false,
      isAdmin: true,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      answers: [
        {
          authorId: 3,
          id: "1-1",
          image: "/assets/images/answers/answer1.png",
          avatar: avatar6,
          name: "Emma Watson",
          time: "38 min ago",
          subject: "What happens to water in space?",
          caption:
            "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
          isShowMore: true,
          views: 1584,
          comments: 129,
          folders: 57,
          like: 363,
          isLiked: false,
          isAdmin: false,
          commentList: [
            {
              authorId: 1,
              name: "Esther Howard",
              avatar: avatar6,
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
              time: "3 minutes ago",
              children: [
                {
                  authorId: 2,
                  name: "Emma Watson",
                  avatar: ema_watson,
                  comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
                  time: "2 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Eleanor Pena",
                  avatar: avatar8,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Sarah Bell",
                  avatar: avatar7,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
              ],
            },
            {
              authorId: 1,
              name: "Esther Howard",
              avatar: avatar9,
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
              time: "3 minutes ago",
              children: [
                {
                  authorId: 1,
                  name: "Eleanor Pena",
                  avatar: avatar10,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Sarah Bell",
                  avatar: avatar7,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
              ],
            },
          ],
        },
      ],
      showAnswer: false,
    },
    {
      authorId: 3,
      id: "2",
      image: "/assets/images/answers/answer3.png",
      avatar: avatar6,
      name: "Emma Watson",
      time: "38 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 744,
      isLiked: false,
      isAdmin: true,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      answers: [
        {
          authorId: 1,
          id: "2-1",
          image: "/assets/images/answers/answer1.png",
          avatar: avatar7,
          name: "Emma Watson",
          time: "38 min ago",
          subject: "What happens to water in space?",
          caption:
            "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
          isShowMore: true,
          views: 1584,
          comments: 129,
          folders: 57,
          like: 543,
          isLiked: false,
          isAdmin: false,
          commentList: [
            {
              authorId: 1,
              name: "Esther Howard",
              avatar: avatar6,
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
              time: "3 minutes ago",
              children: [
                {
                  authorId: 2,
                  name: "Emma Watson",
                  avatar: ema_watson,
                  comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
                  time: "2 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Eleanor Pena",
                  avatar: avatar8,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Sarah Bell",
                  avatar: avatar7,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
              ],
            },
            {
              authorId: 1,
              name: "Esther Howard",
              avatar: avatar9,
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
              time: "3 minutes ago",
              children: [
                {
                  authorId: 1,
                  name: "Eleanor Pena",
                  avatar: avatar10,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Sarah Bell",
                  avatar: avatar7,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
              ],
            },
          ],
        },
        {
          authorId: 2,
          id: "2-2",
          image: "/assets/images/answers/answer2.png",
          avatar: avatar9,
          name: "Emma Watson",
          time: "38 min ago",
          subject: "What happens to water in space?",
          caption:
            "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
          isShowMore: true,
          views: 1584,
          comments: 129,
          folders: 57,
          like: 363,
          isLiked: false,
          isAdmin: true,
          commentList: [
            {
              authorId: 1,
              name: "Esther Howard",
              avatar: avatar6,
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
              time: "3 minutes ago",
              children: [
                {
                  authorId: 2,
                  name: "Emma Watson",
                  avatar: ema_watson,
                  comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
                  time: "2 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Eleanor Pena",
                  avatar: avatar8,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Sarah Bell",
                  avatar: avatar7,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
              ],
            },
            {
              authorId: 1,
              name: "Esther Howard",
              avatar: avatar9,
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
              time: "3 minutes ago",
              children: [
                {
                  authorId: 1,
                  name: "Eleanor Pena",
                  avatar: avatar10,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Sarah Bell",
                  avatar: avatar7,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
              ],
            },
          ],
        },
        {
          authorId: 3,
          id: "2-3",
          image: "/assets/images/answers/answer4.png",
          avatar: avatar6,
          name: "Emma Watson",
          time: "38 min ago",
          subject: "What happens to water in space?",
          caption:
            "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
          isShowMore: true,
          views: 1584,
          comments: 129,
          folders: 57,
          like: 543,
          isLiked: false,
          isAdmin: false,
          commentList: [
            {
              authorId: 1,
              name: "Esther Howard",
              avatar: avatar6,
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
              time: "3 minutes ago",
              children: [
                {
                  authorId: 2,
                  name: "Emma Watson",
                  avatar: ema_watson,
                  comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
                  time: "2 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Eleanor Pena",
                  avatar: avatar8,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Sarah Bell",
                  avatar: avatar7,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
              ],
            },
            {
              authorId: 1,
              name: "Esther Howard",
              avatar: avatar9,
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
              time: "3 minutes ago",
              children: [
                {
                  authorId: 1,
                  name: "Eleanor Pena",
                  avatar: avatar10,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
                {
                  authorId: 1,
                  name: "Sarah Bell",
                  avatar: avatar7,
                  comment: "Dolor sit ameteiusmod consectetur.",
                  time: "1 minutes ago",
                },
              ],
            },
          ],
        },
      ],
      showAnswer: false,
    },
    {
      authorId: 3,
      id: "3",
      image: "/assets/images/answers/answer2.png",
      avatar: avatar6,
      name: "Emma Watson",
      time: "38 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 543,
      isLiked: false,
      isAdmin: false,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      answers: [],
    },
    {
      authorId: 2,
      id: "4",
      image: "/assets/images/answers/answer4.png",
      avatar: avatar9,
      name: "Emma Watson",
      time: "38 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 363,
      isLiked: false,
      isAdmin: true,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      answers: [],
    },
    {
      authorId: 1,
      id: "5",
      image: "/assets/images/answers/answer2.png",
      avatar: avatar7,
      name: "Emma Watson",
      time: "38 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 543,
      isLiked: false,
      isAdmin: false,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      answers: [],
    },
  ]);
//Q and A

export const useSkills = () =>
  useState("skill-list", () => [
    {
      userId: 1,
      id: "1",
      image:
        "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
      video:
        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
      avatar: avatar6,
      name: "Emma Watson",
      time: "28 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 901,
      isLiked: false,
      favCount: 136,
      isFav: false,
      isAdmin: true,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      showAnswer: false,
    },
    {
      userId: 2,
      id: "2",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190627130930/a218.png",
      video:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
      avatar: avatar8,
      name: "Emma Watson",
      time: "38 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 744,
      isLiked: false,
      favCount: 96,
      isFav: false,
      isAdmin: true,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
      showAnswer: false,
    },
    {
      userId: 1,
      id: "3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg",
      video: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
      avatar: avatar7,
      name: "Emma Watson",
      time: "38 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 543,
      isLiked: false,
      favCount: 386,
      isFav: false,
      isAdmin: false,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
    },
    {
      userId: 3,
      id: "4",
      image:
        "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
      video:
        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
      avatar: avatar6,
      name: "Emma Watson",
      time: "38 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 363,
      isLiked: false,
      favCount: 350,
      isFav: false,
      isAdmin: true,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
    },
    {
      userId: 3,
      id: "5",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190627130930/a218.png",
      video:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
      avatar: avatar6,
      name: "Emma Watson",
      time: "38 min ago",
      subject: "What happens to water in space?",
      caption:
        "The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen The state of water at normal temperat liquid, so what happen. The state of water at normal temperat liquid, so what happenThe state of water at normal temperat liquid, so what happen.#Space#Physics#Water_in_space#Grade:Middle",
      isShowMore: true,
      views: 1584,
      comments: 129,
      folders: 57,
      like: 543,
      isLiked: false,
      isAdmin: false,
      favCount: 36,
      isFav: false,
      commentList: [
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar6,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 2,
              name: "Emma Watson",
              avatar: ema_watson,
              comment: "Dolor sit ameteiusmod consectetur adipiscing elit.",
              time: "2 minutes ago",
            },
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar8,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
        {
          authorId: 1,
          name: "Esther Howard",
          avatar: avatar9,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
          time: "3 minutes ago",
          children: [
            {
              authorId: 1,
              name: "Eleanor Pena",
              avatar: avatar10,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
            {
              authorId: 1,
              name: "Sarah Bell",
              avatar: avatar7,
              comment: "Dolor sit ameteiusmod consectetur.",
              time: "1 minutes ago",
            },
          ],
        },
      ],
    },
  ]);

//archives

export const useArchiveList = () =>
  useState("archive-list", () => [
    // music
    {
      src: fashion2,
      id: 1,
    },
    {
      src: music1,
      id: 2,
    },
    {
      src: music2,
      id: 3,
    },
    {
      src: fashion3,
      id: 4,
    },
    {
      src: music4,
      id: 5,
    },
    // food
    {
      src: food1,
      id: 6,
    },
    {
      src: food3,
      id: 7,
    },
    {
      src: food2,
      id: 8,
    },
    {
      src: life1,
      id: 9,
    },
    {
      src: food4,
      id: 10,
    },
    // fashion
    {
      src: fashion1,
      id: 11,
    },
    {
      src: food3,
      id: 12,
    },
    {
      src: fashion4,
      id: 13,
    },
    // life
  ]);
export const useSavedList = () =>
  useState("saved-list", () => [
    {
      src: place1,
      type: "Places to go",
      id: 1,
    },
    {
      src: place2,
      type: "Places to go",
      id: 2,
    },
    {
      src: place3,
      type: "Places to go",
      id: 3,
    },
    {
      src: place4,
      type: "Places to go",
      id: 4,
    },
    {
      src: place5,
      type: "Places to go",
      id: 5,
    },
    {
      src: place6,
      type: "Places to go",
      id: 6,
    },
    {
      src: place7,
      type: "Places to go",
      id: 7,
    },
    {
      src: place8,
      type: "Places to go",
      id: 8,
    },
    {
      src: emma_watson_post_2,
      type: "Films",
      id: 9,
    },
    {
      src: sarah_smit_post_5,
      type: "Films",
      id: 10,
    },
    {
      src: music1,
      type: "Music",
      id: 11,
    },
    {
      src: music2,
      type: "Music",
      id: 12,
    },
    {
      src: music3,
      type: "Music",
      id: 13,
    },
    {
      src: music4,
      type: "Music",
      id: 14,
    },
    {
      src: connection1,
      type: "Ideas",
      id: 15,
    },
    {
      src: connection2,
      type: "Ideas",
      id: 16,
    },
    {
      src: connection3,
      type: "Ideas",
      id: 17,
    },
    {
      src: connection4,
      type: "Ideas",
      id: 18,
    },
  ]);
