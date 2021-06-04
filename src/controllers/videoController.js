const fakeUser = {
  userName: 'choree',
  loggedIn: true,
}
let videos = [{
    title: 'first video',
    rating: 5,
    comments: 2,
    author: 'choree',
    createdAt: '2 hours ago',
    views: 1,
    id: 1,
  },
  {
    title: 'second video',
    rating: 5,
    comments: 2,
    author: 'choree',
    createdAt: '2 hours ago',
    views: 2323,
    id: 2,
  },
  {
    title: 'third video',
    rating: 5,
    comments: 2,
    author: 'choree',
    createdAt: '2 hours ago',
    views: 2323,
    id: 3,
  },
];

const trending = (req, res) => {
  return res.render('home', {
    pageTitle: 'Home',
    fakeUser,
    videos
  });
}

const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('see', { pageTitle: `Watching ${video.title}`, fakeUser, video });
}
const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('edit', {pageTitle: `Edit ${video.title}`, fakeUser, video})
}
const postEdit = (req, res) => {
  const {id} = req.params;
  console.log(req.body);
  res.redirect(`/videos/${id}`);
}
const search = (req, res) => res.send('search')

export {
  trending,
  see,
  getEdit,
  postEdit,
  search,
}