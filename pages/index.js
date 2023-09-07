import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';



const DUMMY_MeetUPs = [
    {
        id: 'm1',
        title: 'my first meetup',
        image: 'https://float-production-blog.storage.googleapis.com/2022/09/Selecting-a-meetup-location.png',
        address: 'xyz',
        description: 'first meetup'
    },
    {
        id: 'm2',
        title: 'my second meetup',
        image: 'https://float-production-blog.storage.googleapis.com/2022/09/Selecting-a-meetup-location.png',
        address: 'abc',
        description: ' second meetup '
    }
]

const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://pankyghogare17:AZxQm7pXmd0aAoJ4@cluster0.zrnt87m.mongodb.net/Meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('Meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();


    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage;