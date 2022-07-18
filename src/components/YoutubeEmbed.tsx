import React from 'react'
import "../App.css"


interface MyProps {
    url: string
    title: string
}

interface MyState {}

export class YoutubeEmbed extends React.Component<MyProps, MyState> {
    render() {
        return (
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${this.props.url}`}
                title={`${this.props.title}`}
                width='100%'
                height='100%'
            />
        )
    }
}