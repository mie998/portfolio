import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import polyImg from './images/polygon2.jpg';

const tabletSizeMax = 1000;
const smartPhoneSizeMax = 670;
const smartPhoneSizeMedium = 420;
const smartPhoneSizeSmall = 320;
interface Contents {
    key: string;
    url: string;
    description: string;
    img: string;
}

const useStyles = makeStyles((theme) => ({
    ref: {
        textDecoration: 'none',
        '&:hover': {
            opacity: '0.5',
        },
    },
    cardContainer: {
        textAlign: 'center',
    },
    cardDescription: {},
    noCardDescription: {
        display: 'None',
    },
    largeCard: {
        display: 'flex',
        width: '25rem',
        height: '10rem',
    },
    mediumCard: {
        display: 'flex',
        width: '20rem',
        height: '8rem',
    },
    smallCard: {
        display: 'flex',
        width: '15rem',
        height: '5rem',
    },
    cover: { width: '100%' },
}));

export const useWindowDimensions: any = () => {
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    };

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    );
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions(getWindowDimensions());
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return windowDimensions;
};

const Works: React.FC = () => {
    const classes = useStyles();
    const data: Contents[] = [
        {
            key: 'portfolio',
            url: 'https://mie998.github.io/portfolio/',
            description:
                '自身のポートフォリオサイト. React, TypeScript などを使用.',
            img: polyImg,
        },
    ];
    const { width, height } = useWindowDimensions();

    const table_contents = data.map((item) => (
        <Grid item xl>
            <a href={item.url} className={classes.ref}>
                <Card
                    className={
                        width > smartPhoneSizeMedium
                            ? classes.largeCard
                            : width > smartPhoneSizeSmall
                            ? classes.mediumCard
                            : classes.smallCard
                    }
                >
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            {item.key}
                        </Typography>
                        <Typography
                            component="h6"
                            variant="subtitle1"
                            color="textSecondary"
                            className={
                                width < smartPhoneSizeMedium
                                    ? classes.noCardDescription
                                    : classes.cardDescription
                            }
                        >
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className={classes.cover}
                        image={item.img}
                        title="portfolio"
                    ></CardMedia>
                </Card>
            </a>
        </Grid>
    ));

    return (
        <div id="works" className="content-wrapper">
            <h2 className="title">Works</h2>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="flex-start"
                className={classes.cardContainer}
            >
                {table_contents}
            </Grid>
        </div>
    );
};

export default Works;
