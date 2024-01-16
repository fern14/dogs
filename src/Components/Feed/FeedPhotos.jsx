/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

const FeedPhotos = () => {

    const { data, loading, error, request } = useFetch();

    useEffect(() => {

        async function requestPhotos() {

            const { url, options } = PHOTOS_GET({page: 1, total: 6, user: 0});

            const {response, json} = await  request(url, options);

            console.log(json);

        }

        requestPhotos();

    }, [request]);

    if (error) return <Error error={error} />
    if (loading) return <Loading />

    if (data)
  return (
    <ul>
        {data.map((photo) => {
            return <FeedPhotosItem key={photo.id} photo={photo} />
        })}
    </ul>
  );
  else return null;
}

export default FeedPhotos