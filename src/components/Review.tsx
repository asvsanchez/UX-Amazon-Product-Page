import React from 'react';

const Review: React.FC = () => {
  return (
    <div>


      <div id="averageCustomerReviews_feature_div" className="feature" data-feature-name="averageCustomerReviews">
        <div id="averageCustomerReviews" className="a-spacing-none" data-asin="B07PVCVBN7" data-ref="dpx_acr_pop_" >
          <span className="a-declarative" data-action="acrStarsLink-click-metrics" data-acrStarsLink-click-metrics="{}">
            <span id="acrPopover" className="reviewCountTextLinkedHistogram noUnderline" title="4.5 de 5 estrellas">
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B07PVCVBN7&quot;}">
                {/* eslint-disable-next-line */}
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <i className="a-icon a-icon-star a-star-4-5"><span className="a-icon-alt">4.5 de 5 estrellas</span></i>
                  <i className="a-icon a-icon-popover"></i></a>
              </span>
              <span className="a-letter-space"></span>
            </span>
          </span>
          <span className="a-letter-space"></span>
          <span className="a-declarative" data-action="acrLink-click-metrics" data-acrLink-click-metrics="{}">
            <a id="acrCustomerReviewLink" className="a-link-normal" href="#customerReviews">
              <span id="acrCustomerReviewText" className="a-size-base">6,628 valoraciones</span>
            </a>
          </span>

        </div>
      </div>

      <div id="ask_feature_div" className="feature" data-feature-name="ask">
        <span className="askPipe"> | </span>
        <span className="celwidget">
          <a id="askATFLink" className="a-link-normal askATFLink" href="/ask/questions/asin/B07PVCVBN7/ref=ask_atf_aqp_dp">
            <span className="a-size-base">
              Más de 1000 preguntas respondidas
      </span>
          </a>
        </span>
      </div>

      <div id="acBadge_feature_div" className="feature" data-feature-name="acBadge">
        <div className="ac-badge-wrapper">
          <div className="a-popover-preload" id="a-popover-amazons-choice-popover">
            <span className="a-size-small">
              Amazon's Choice recomienda productos con opiniones positivas, a buen precio y listos para enviar.
                    </span>
          </div>
          <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;amazons-choice-popover&quot;,&quot;position&quot;:&quot;triggerTop&quot;}">
            <span className="a-size-small aok-float-left ac-badge-rectangle">
              <span className="ac-badge-text-primary">Amazon's </span>
              <span className="ac-badge-text-secondary">Choice</span>
            </span>
            <span className="aok-float-left ac-badge-triangle"></span>
          </span>
          <span className="ac-for-text">
            <span>de "<span className="ac-keyword-link"><a href="/s/ref=choice_dp_b?keywords=fire%20stick">fire stick</a></span>"</span>
          </span>
        </div>
      </div>

      <hr />

    </div>
  );
}

export default Review;
