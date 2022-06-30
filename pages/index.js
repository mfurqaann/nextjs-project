import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
   {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/8d/bb/49/york-town-hall.jpg?w=1200&h=-1&s=1',
      address: 'Some address 5, 123 some city',
      description: 'This is a first meetup',
   },
   {
      id: 'm2',
      title: 'A Second Meetup',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/8d/bb/49/york-town-hall.jpg?w=1200&h=-1&s=1',
      address: 'Some address 2, 456 some city',
      description: 'This is a second meetup',
   },
]

const HomePage = () => {
   const [loadedMeetups, setLoadedMeetups] = useState([])

   useEffect(() => {
      setLoadedMeetups(DUMMY_MEETUPS)
   }, [])

   return <MeetupList meetups={loadedMeetups} />
}

export default HomePage
