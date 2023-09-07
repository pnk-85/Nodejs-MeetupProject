import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';



const HomePage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>React Meetup</title>
                <meta 
                name='description'
                content='Browse a huge list of highly active react meetup'
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
        
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