import React from 'react'
import "../App.css"


interface MyProps {
    url: string
}

interface MyState {}

export class YoutubeEmbed extends React.Component<MyProps, MyState> {
    render() {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${this.props.url}`}
                title="Sweater People Youtube"
                width='100%'
                height='100%'
            />
        )
    }
}