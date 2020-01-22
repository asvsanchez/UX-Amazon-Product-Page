import React from 'react';

interface IImages {
    images_link: string[]
  }
  
  class Images extends React.Component<IImages, {}> {
    constructor(props: IImages) {
        super(props);
        // change state
    }
  
    public render() {
    return (
        <div>

            <ul className="a-unordered-list a-nostyle a-button-list a-vertical a-spacing-top-micro">

                <li className="a-spacing-small item"><span className="a-list-item">
                    <span className="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;0&quot;,&quot;variant&quot;:&quot;LEFT&quot;,&quot;index&quot;:&quot;0&quot;,&quot;type&quot;:&quot;image&quot;}">
                        <span className="a-button a-button-selected a-button-thumbnail a-button-toggle a-button-focus"><span className="a-button-inner"><input className="a-button-input" type="submit" /><span className="a-button-text" aria-hidden="true" />
                            <img alt="" src={this.props.images_link[0]} />
                        </span></span></span>
                </span></li>
                <li className="a-spacing-small item"><span className="a-list-item">
                    <span className="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;1&quot;,&quot;variant&quot;:&quot;MAIN&quot;,&quot;index&quot;:&quot;1&quot;,&quot;type&quot;:&quot;image&quot;}">
                        <span className="a-button a-button-thumbnail a-button-toggle"><span className="a-button-inner"><input className="a-button-input" type="submit" /><span className="a-button-text" aria-hidden="true">
                            <img alt="" src={this.props.images_link[1]} />
                        </span></span></span>
                    </span>
                </span></li>
                <li className="a-spacing-small item"><span className="a-list-item">
                    <span className="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;2&quot;,&quot;variant&quot;:&quot;PT01&quot;,&quot;index&quot;:&quot;2&quot;,&quot;type&quot;:&quot;image&quot;}">
                        <span className="a-button a-button-thumbnail a-button-toggle"><span className="a-button-inner"><input className="a-button-input" type="submit" /><span className="a-button-text" aria-hidden="true">
                            <img alt="" src={this.props.images_link[2]} />
                        </span></span></span>
                    </span>
                </span></li>
                <li className="a-spacing-small item"><span className="a-list-item">
                    <span className="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;3&quot;,&quot;variant&quot;:&quot;PT02&quot;,&quot;index&quot;:&quot;3&quot;,&quot;type&quot;:&quot;image&quot;}">
                        <span className="a-button a-button-thumbnail a-button-toggle"><span className="a-button-inner"><input className="a-button-input" type="submit" /><span className="a-button-text" aria-hidden="true">
                            <img alt="" src={this.props.images_link[3]} />
                        </span></span></span>
                    </span>
                </span></li>
                <li className="a-spacing-small videoCountTemplate aok-hidden"><span className="a-list-item">
                    <span id="videoCount_template" className="a-size-mini a-color-secondary video-count a-text-bold a-nowrap"></span>
                </span></li>
                <li className="a-spacing-small 360IngressTemplate aok-hidden"><span className="a-list-item">
                    <span className="a-declarative" data-action="thumb-action" data-thumb-action="{}">
                        <span className="a-button a-button-thumbnail a-button-toggle"><span className="a-button-inner"><input className="a-button-input" type="submit" /><span className="a-button-text" aria-hidden="true">
                            <img alt="" src={this.props.images_link[4]} />
                        </span></span></span>
                    </span>
                </span></li>
                <li className="a-spacing-small template"><span className="a-list-item">
                    <span className="a-button a-button-thumbnail a-button-toggle"><span className="a-button-inner"><input className="a-button-input" type="submit" /><span className="a-button-text" aria-hidden="true">
                        <span className="placeHolder"></span>
                    </span></span></span>
                </span></li>
            </ul>

        </div>
    );
    }
}

export default Images;
