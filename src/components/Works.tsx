import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import polyImg from './images/polygon2.jpg';

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
    card: { display: 'flex', flexdirection: 'column' },
    cover: { width: '80%' },
}));

const Works: React.FC = () => {
    const classes = useStyles();
    let table_content = [];
    let data: Contents[] = [
        {
            key: 'portfolio',
            url: 'https://mie998.github.io/portfolio/',
            description:
                '自身のポートフォリオサイト. React, TypeScript などを使用.',
            img: './images/polygon2.jpg',
        },
    ];

    for (var i in data) {
        table_content.push(
            <Grid item xs={4}>
                <a href={data[i].url} className={classes.ref}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography component="h5" variant="h5">
                                {data[i].key}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                {data[i].description}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            className={classes.cover}
                            image={polyImg}
                            title="portfolio"
                        ></CardMedia>
                    </Card>
                </a>
            </Grid>,
        );
    }

    return (
        <div id="works" className="content-wrapper">
            <h2 className="title">Works</h2>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                {table_content}
            </Grid>
        </div>
    );
};

export default Works;
