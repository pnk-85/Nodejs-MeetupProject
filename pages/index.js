
import MeetupList from '../components/meetups/MeetupList';



const DUMMY_MeetUPs = [
    {
        id : 'm1',
        title: 'my first meetup',
        image: 'https://float-production-blog.storage.googleapis.com/2022/09/Selecting-a-meetup-location.png',
        address: 'xyz',
        description: 'first meetup'
    },
    {
        id : 'm2',
        title: 'my second meetup',
        image: 'https://float-production-blog.storage.googleapis.com/2022/09/Selecting-a-meetup-location.png',
        address: 'abc',
        description: ' second meetup '
    }
]

const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups}/>
    )
}

export async function getStaticProps () {

    return {
        props: {
            meetups : DUMMY_MeetUPs
        },
        revalidate : 1
    }
}
 
export default HomePage;