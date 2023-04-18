export default data = [
  {
    id: 1,
    title: 'VOCABULARY. A day in cyberspace',
    test: [
      {
        id: 1,
        type: 1,
        question: 'Complete the social media words',
        options: ['p', 's', 'm', 'p', 's', 'd'],
        correct_option: [
          'poll',
          'selfie',
          'meme',
          'post',
          'subscription',
          'direct message',
        ],
        image: [
          require('../assets/images/1-1.png'),
          require('../assets/images/1-2.png'),
          require('../assets/images/1-3.png'),
          require('../assets/images/1-4.png'),
          require('../assets/images/1-5.png'),
          require('../assets/images/1-6.png'),
        ],
      },
      {
        id: 2,
        type: 2,
        question:
          'Complete the text with the words in the box. Use each word only once.',
        text: `  Hi everyone! Just to let you know, this is my last post of the day! I’ve spent all day online today! There has been so much to do! I started the day on Snapchat. After opening my 1) ______ and answering some 2) ______ from my besties, I posted some 3) ______ from last night’s leaver’s party! I can’t believe high school is over!! To celebrate, I even posted some photos from my 4) ______ of my primary school leaver’s party. They look so ridiculous now! Then I looked at some photos I’ve been 5) ______ in that my friends posted from last night. I even 6) ______ on a few of the funnier ones. It was certainly a night to remember! I decided to set up a 7) ______ to find out what people’s impressions were of the party. It seems it was a huge success all round! Now it’s time for me to 8) ______ out for the day. Sleep, here I come!`,
        options: [
          {label: 'commented', value: 'commented'},
          {label: 'DMs', value: 'DMs'},
          {label: 'log', value: 'log'},
          {label: 'memories', value: 'memories'},
          {label: 'poll', value: 'poll'},
          {label: 'selfies', value: 'selfies'},
          {label: 'streaks', value: 'streaks'},
          {label: 'tagged', value: 'tagged'},
        ],
        correct_option: [
          'streaks',
          'DMs',
          'selfies',
          'memories',
          'tagged',
          'commented',
          'poll',
          'log',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'VOCABULARY. Phobias',
    test: [
      {
        id: 1,
        type: 1,
        question: 'Complete the -ed adjectives',
        options: ['b', 't', 'r', 'a', 'f', 'a', 'e'],
        correct_option: [
          'bored',
          'terrified',
          'relaxed',
          'astonished',
          'fascinated',
          'annoyed',
          'embarrassed',
        ],
        image: [
          require('../assets/images/2-1.png'),
          require('../assets/images/2-2.png'),
          require('../assets/images/2-3.png'),
          require('../assets/images/2-4.png'),
          require('../assets/images/2-5.png'),
          require('../assets/images/2-6.png'),
          require('../assets/images/2-7.png'),
        ],
      },
      {
        id: 2,
        type: 2,
        question:
          'Complete the text with the words in the box. Use each word only once.',
        text: `Dear Katia 
Thank you so much for your letter. It was fascinating to learn all about your family and where you live.
I was pleased to hear that you have a little brother, too! My brother is called Archie and he’s seven. 
Most of the time he’s nice, but he can be very 1) ____ at times. I was 2) ____ when he put a spider in my bed last week – it was a real 3) ____ ! I’m very frightened of spiders – they 4) ____ me! Does your brother do little things to 5) ____ you sometimes? 
I’m glad you’re 6) ____ in swimming. Some people think it’s 7) ____ just swimming up and down a pool, but I find it very good for 8) ____ . I also like to 9) ____ by doing yoga.
Write to me again soon!
Best wishes
Grace`,
        options: [
          {label: 'shock', value: 'shock'},
          {label: 'terrify', value: 'terrify'},
          {label: 'annoying', value: 'annoying'},
          {label: 'horrified', value: 'horrified'},
          {label: 'annoy', value: 'annoy'},
          {label: 'relax', value: 'relax'},
          {label: 'relaxation', value: 'relaxation'},
          {label: 'boring', value: 'boring'},
          {label: 'interested', value: 'interested'},
        ],
        correct_option: [
          'annoying',
          'horrified',
          'shock',
          'terrify',
          'annoy',
          'interested',
          'boring',
          'relaxation',
          'relax',
        ],
      },
    ],
  },
];
// text: `  Hi everyone! Just to let you know, this is my last post of the day! I’ve spent all day online today! There has been so much to do! I started the day on Snapchat. After opening my $%^ and answering some $%^ from my besties, I posted some $%^ from last night’s leaver’s party! I can’t believe high school is over!! To celebrate, I even posted some photos from my $%^ of my primary school leaver’s party. They look so ridiculous now! Then I looked at some photos I’ve been $%^ in that my friends posted from last night. I even $%^ on a few of the funnier ones. It was certainly a night to remember! I decided to set up a $%^ to find out what people’s impressions were of the party. It seems it was a huge success all round! Now it’s time for me to $%^ out for the day. Sleep, here I come!`,
