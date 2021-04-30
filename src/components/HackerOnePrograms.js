import React from 'react';
import { useIntl } from 'react-intl';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { RiGovernmentLine } from 'react-icons/ri';
import { FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiHackerone, SiAirbnb, SiAtAndT, SiAmazon, SiVerizon, SiPaypal, SiSalesforce, SiMailDotRu, SiUber, SiTwitter, SiGoogle, SiMagento, SiSlack, SiShopify, SiQiwi, SiVk, SiGithub, SiGitlab, SiValve, SiVimeo, SiSpotify, SiZendesk, SiCoinbase, SiDropbox, SiSnapchat, SiUdemy, SiMapbox, SiLyft, SiYelp, SiNextcloud, SiDashlane, SiAlgolia, SiImgur, SiAirtable, SiQuora, SiBadoo, SiLivestream, SiLine, SiPlaystation, SiDeliveroo, SiQuantopian, SiTrustpilot, SiDiscourse, SiBigcartel, SiNintendo, SiPixiv, SiFlickr, SiPhabricator, SiCoda, SiLiberapay, SiAutomatic, SiGoogleplay, SiBuzzfeed, SiHbo, SiUnity, SiNextdoor, SiSymphony, SiKickstarter, SiBasecamp, SiDatadog, SiDynatrace, SiLinode, SiInstacart, SiMattermost, SiWarnerbrosDot, SiSquarespace, SiBox, SiAffinity, SiRuby, SiAmazonaws, SiBmw } from 'react-icons/si';

const HackerOnePrograms = () => {
    const intl = useIntl();

    return(
        <SubMenu title={intl.formatMessage({ id: 'hackerone' })} icon={<SiHackerone />}>
            <MenuItem> 99designs</MenuItem>
            <MenuItem> About Espanol</MenuItem>
            <MenuItem> About You GmbH</MenuItem>
            <MenuItem> Addepar</MenuItem>
            <MenuItem> Agoda</MenuItem>
            <MenuItem><SiAffinity /> Affinity</MenuItem>
            <MenuItem><SiAirbnb /> Airbnb</MenuItem>
            <MenuItem> Airlock Secure Access Hub</MenuItem>
            <MenuItem><SiAirtable /> Airtable</MenuItem>
            <MenuItem><SiAlgolia /> Algolia</MenuItem>
            <MenuItem> All of Us CMS</MenuItem>
            <MenuItem> Allegro</MenuItem>
            <MenuItem> Alvosec</MenuItem>
            <MenuItem><SiAmazon /> Amazon</MenuItem>
            <MenuItem><SiAmazonaws /> Amazon Web Services (AWS)</MenuItem>
            <MenuItem> Amino,Inc</MenuItem>
            <MenuItem> A.S. Watson Group</MenuItem>
            <MenuItem> AppDirect</MenuItem>
            <MenuItem> Appian</MenuItem>
            <MenuItem> AppLovin</MenuItem>
            <MenuItem><SiAtAndT /> AT&amp;T</MenuItem>
            <MenuItem><SiAutomatic /> Automattic</MenuItem>
            <MenuItem> Azbuka Vkusa</MenuItem>
            <MenuItem><SiBadoo /> Badoo</MenuItem>
            <MenuItem> Backblaze</MenuItem>
            <MenuItem> Bankin</MenuItem>
            <MenuItem><SiBasecamp /> Basecamp</MenuItem>
            <MenuItem> BGL Group</MenuItem>
            <MenuItem><SiBigcartel /> Big Cartel</MenuItem>
            <MenuItem> Bime</MenuItem>
            <MenuItem> Binary.com</MenuItem>
            <MenuItem> bitaccess</MenuItem>
            <MenuItem> BitMEX</MenuItem>
            <MenuItem> Bitvise</MenuItem>
            <MenuItem> Blanco Services</MenuItem>
            <MenuItem> Blockchain</MenuItem>
            <MenuItem> Blockstack</MenuItem>
            <MenuItem><SiBmw /> BMW Group</MenuItem>
            <MenuItem> Booking.com</MenuItem>
            <MenuItem><SiBox /> Box</MenuItem>
            <MenuItem> BugPoC</MenuItem>
            <MenuItem> Buildkite</MenuItem>
            <MenuItem> Bumble</MenuItem>
            <MenuItem><SiBuzzfeed /> BuzzFeed</MenuItem>
            <MenuItem> Carta</MenuItem>
            <MenuItem> Casey's General Store</MenuItem>
            <MenuItem> Casper</MenuItem>
            <MenuItem> Castor EDC</MenuItem>
            <MenuItem> Celigo Inc.</MenuItem>
            <MenuItem> Chainlink</MenuItem>
            <MenuItem> CharlieHR</MenuItem>
            <MenuItem> Chaturbate</MenuItem>
            <MenuItem> Chegg</MenuItem>
            <MenuItem> Citavi</MenuItem>
            <MenuItem> Clario</MenuItem>
            <MenuItem> CLEAR</MenuItem>
            <MenuItem> Clever</MenuItem>
            <MenuItem> CloudWalk</MenuItem>
            <MenuItem> Clover</MenuItem>
            <MenuItem><SiCoda /> Coda</MenuItem>
            <MenuItem><SiCoinbase /> Coinbase</MenuItem>
            <MenuItem> Coingaming</MenuItem>
            <MenuItem> Colourbox ApS</MenuItem>
            <MenuItem> Credit Karma</MenuItem>
            <MenuItem> Criteo</MenuItem>
            <MenuItem> Crobox</MenuItem>
            <MenuItem> Crowdstrike</MenuItem>
            <MenuItem> CS Money</MenuItem>
            <MenuItem> Cultivate AI</MenuItem>
            <MenuItem> Curve</MenuItem>
            <MenuItem><SiDashlane /> Dashlane</MenuItem>
            <MenuItem> Databricks</MenuItem>
            <MenuItem><SiDatadog /> DataDog</MenuItem>
            <MenuItem> DataStax</MenuItem>
            <MenuItem><SiDeliveroo /> Deliveroo</MenuItem>
            <MenuItem> de Volksbank</MenuItem>
            <MenuItem> Desjardins</MenuItem>
            <MenuItem> DiDi Labs</MenuItem>
            <MenuItem><SiDiscourse /> Discourse</MenuItem>
            <MenuItem> Doordash</MenuItem>
            <MenuItem><SiDropbox /> Dropbox</MenuItem>
            <MenuItem><SiDynatrace /> Dynatrace</MenuItem>
            <MenuItem> Dyson</MenuItem>
            <MenuItem> Early Warning</MenuItem>
            <MenuItem> Earnest</MenuItem>
            <MenuItem> Element AI</MenuItem>
            <MenuItem> Elisa</MenuItem>
            <MenuItem> Engel &amp; Volkers Technology GmbH</MenuItem>
            <MenuItem> Eobot</MenuItem>
            <MenuItem> eToro</MenuItem>
            <MenuItem> EXNESS</MenuItem>
            <MenuItem> Expedia Group</MenuItem>
            <MenuItem> Extended Stay America</MenuItem>
            <MenuItem> FanDuel</MenuItem>
            <MenuItem> Files.com</MenuItem>
            <MenuItem><SiFlickr /> Flickr</MenuItem>
            <MenuItem> Flipkart</MenuItem>
            <MenuItem> ForeScout Technologies</MenuItem>
            <MenuItem> Foxpass</MenuItem>
            <MenuItem> Front</MenuItem>
            <MenuItem> FullContact</MenuItem>
            <MenuItem> Funding Societies</MenuItem>
            <MenuItem> G2A.com</MenuItem>
            <MenuItem> Garena Online Pivate Limited</MenuItem>
            <MenuItem> GEICO</MenuItem>
            <MenuItem><SiGithub /> GitHub</MenuItem>
            <MenuItem><SiGitlab /> GitLab</MenuItem>
            <MenuItem> Glasswire</MenuItem>
            <MenuItem> Gleam.io</MenuItem>
            <MenuItem> Goldman Sachs</MenuItem>
            <MenuItem><SiGoogle /> Google API Security Rewards Program</MenuItem>
            <MenuItem><SiGoogleplay /> Google Play Security Reward Program</MenuItem>
            <MenuItem> Grab</MenuItem>
            <MenuItem> Grammarly</MenuItem>
            <MenuItem> Greenhouse.io</MenuItem>
            <MenuItem> GrubHub</MenuItem>
            <MenuItem><SiHackerone /> HackerOne</MenuItem>
            <MenuItem> Harvest</MenuItem>
            <MenuItem> Harry's</MenuItem>
            <MenuItem> Haven Life</MenuItem>
            <MenuItem><SiHbo /> HBO</MenuItem>
            <MenuItem> Holvi Payment Services Ltd</MenuItem>
            <MenuItem> Hyatt Hotels</MenuItem>
            <MenuItem> Hyperledger</MenuItem>
            <MenuItem><SiImgur /> Imgur</MenuItem>
            <MenuItem> Improbable Worlds Limited</MenuItem>
            <MenuItem> InnoGames</MenuItem>
            <MenuItem><SiInstacart /> Instacart</MenuItem>
            <MenuItem> IOVLabs</MenuItem>
            <MenuItem> IRCCloud</MenuItem>
            <MenuItem><SiKickstarter /> Kickstarter</MenuItem>
            <MenuItem> Kindred Group</MenuItem>
            <MenuItem> Kiwi.com</MenuItem>
            <MenuItem> KnowBe4</MenuItem>
            <MenuItem> Ladder</MenuItem>
            <MenuItem> Lark Technologies Pte. Ltd.</MenuItem>
            <MenuItem><SiLiberapay /> Liberapay</MenuItem>
            <MenuItem> Libra</MenuItem>
            <MenuItem> LifeOmic</MenuItem>
            <MenuItem><SiLine /> LINE</MenuItem>
            <MenuItem><SiLinode /> Linode</MenuItem>
            <MenuItem><SiLivestream /> Livestream</MenuItem>
            <MenuItem> Lob</MenuItem>
            <MenuItem> LocalTapiola</MenuItem>
            <MenuItem> Looker</MenuItem>
            <MenuItem><SiLyft /> Lyft</MenuItem>
            <MenuItem> Lyst</MenuItem>
            <MenuItem> MacPaw</MenuItem>
            <MenuItem><SiMagento /> Magento</MenuItem>
            <MenuItem> Magisto</MenuItem>
            <MenuItem><SiMailDotRu /> Mail.ru</MenuItem>
            <MenuItem> Maker Ecosystem Growth Holdings</MenuItem>
            <MenuItem> Malwarebytes</MenuItem>
            <MenuItem><SiMapbox /> Mapbox</MenuItem>
            <MenuItem> Marks &amp; Spencer plc</MenuItem>
            <MenuItem> MasterClass</MenuItem>
            <MenuItem> Matomo</MenuItem>
            <MenuItem><SiMattermost /> Mattermost</MenuItem>
            <MenuItem> Maximum</MenuItem>
            <MenuItem> MedChat,LLC</MenuItem>
            <MenuItem> Metromile</MenuItem>
            <MenuItem> Mezzoforte Oy</MenuItem>
            <MenuItem> Moneybird</MenuItem>
            <MenuItem> Money Super Market</MenuItem>
            <MenuItem> Moody's</MenuItem>
            <MenuItem> Mulesoft</MenuItem>
            <MenuItem> N26</MenuItem>
            <MenuItem><SiNextcloud /> Nextcloud</MenuItem>
            <MenuItem><SiNextdoor /> Nextdoor</MenuItem>
            <MenuItem> New Relic</MenuItem>
            <MenuItem><SiNintendo /> Nintendo</MenuItem>
            <MenuItem><FaNodeJs /> Node.js 3rd-party modules</MenuItem>
            <MenuItem> Noon</MenuItem>
            <MenuItem> Ok.ru</MenuItem>
            <MenuItem> Omise</MenuItem>
            <MenuItem> Open Xchange</MenuItem>
            <MenuItem> OpenTable</MenuItem>
            <MenuItem> ownCloud</MenuItem>
            <MenuItem> Ozon</MenuItem>
            <MenuItem> Paddy Power Betfair</MenuItem>
            <MenuItem> Paragon Initiative Enterprises</MenuItem>
            <MenuItem> Payfit</MenuItem>
            <MenuItem><SiPaypal /> Paypal</MenuItem>
            <MenuItem> Percy</MenuItem>
            <MenuItem><SiPhabricator /> Phabricator</MenuItem>
            <MenuItem> Pillar Project Worldwide Limited</MenuItem>
            <MenuItem> Pipedrive</MenuItem>
            <MenuItem><SiPixiv /> pixiv</MenuItem>
            <MenuItem> Plaid</MenuItem>
            <MenuItem><SiPlaystation /> PlayStation</MenuItem>
            <MenuItem> Pleo</MenuItem>
            <MenuItem> Plotly</MenuItem>
            <MenuItem> Pornhub</MenuItem>
            <MenuItem> Postmates</MenuItem>
            <MenuItem> Priceline</MenuItem>
            <MenuItem> Procore</MenuItem>
            <MenuItem><SiQiwi /> Qiwi</MenuItem>
            <MenuItem><SiQuantopian /> Quantopian</MenuItem>
            <MenuItem><SiQuora /> Quora</MenuItem>
            <MenuItem> RecargaPay</MenuItem>
            <MenuItem> Recurly,Inc</MenuItem>
            <MenuItem> Redtube</MenuItem>
            <MenuItem> Reminato</MenuItem>
            <MenuItem> Remitly</MenuItem>
            <MenuItem> Repay</MenuItem>
            <MenuItem> Robinhood</MenuItem>
            <MenuItem> Rockstar Games</MenuItem>
            <MenuItem><SiRuby /> ruby</MenuItem>
            <MenuItem><SiSalesforce /> Salesforce</MenuItem>
            <MenuItem> Saxo Bank</MenuItem>
            <MenuItem> Scopely</MenuItem>
            <MenuItem> Scratch</MenuItem>
            <MenuItem> SecNews</MenuItem>
            <MenuItem> SEMRush</MenuItem>
            <MenuItem> Shipt</MenuItem>
            <MenuItem><SiShopify /> Shopify</MenuItem>
            <MenuItem> Showmax</MenuItem>
            <MenuItem><SiSlack /> Slack</MenuItem>
            <MenuItem> Small Improvements</MenuItem>
            <MenuItem> Smartsheet</MenuItem>
            <MenuItem><SiSnapchat /> Snapchat</MenuItem>
            <MenuItem> Snowflake</MenuItem>
            <MenuItem> Splash</MenuItem>
            <MenuItem><SiSpotify /> Spotify</MenuItem>
            <MenuItem><SiSquarespace /> Squarespace</MenuItem>
            <MenuItem> SumUp</MenuItem>
            <MenuItem><SiSymphony /> Symphony</MenuItem>
            <MenuItem> Starbucks</MenuItem>
            <MenuItem> Starling Bank</MenuItem>
            <MenuItem> Take-Two Interactive</MenuItem>
            <MenuItem> Tendermint</MenuItem>
            <MenuItem> Teradici</MenuItem>
            <MenuItem> TheRealReal</MenuItem>
            <MenuItem> Time and Date AS</MenuItem>
            <MenuItem> Trip Savvy</MenuItem>
            <MenuItem><SiTrustpilot /> Trustpilot</MenuItem>
            <MenuItem><RiGovernmentLine /> TTS</MenuItem>
            <MenuItem> Tube8</MenuItem>
            <MenuItem> TunnelBear</MenuItem>
            <MenuItem> Turner</MenuItem>
            <MenuItem> Turtle Entertainment Online</MenuItem>
            <MenuItem><SiTwitter /> Twitter</MenuItem>
            <MenuItem><SiUber /> Uber</MenuItem>
            <MenuItem> Ubiquiti</MenuItem>
            <MenuItem><SiUdemy /> Udemy</MenuItem>
            <MenuItem> UiPath</MenuItem>
            <MenuItem> Unikrn</MenuItem>
            <MenuItem><SiUnity /> Unity Technologies</MenuItem>
            <MenuItem> Upgrade Inc</MenuItem>
            <MenuItem> Uploadcare</MenuItem>
            <MenuItem> Upserve</MenuItem>
            <MenuItem> Upstart</MenuItem>
            <MenuItem> UrbanClap</MenuItem>
            <MenuItem><RiGovernmentLine /> U.S. Securities and Exchange Commission</MenuItem>
            <MenuItem><SiValve /> Valve</MenuItem>
            <MenuItem> Vanilla</MenuItem>
            <MenuItem> VHX</MenuItem>
            <MenuItem><SiVimeo /> Vimeo</MenuItem>
            <MenuItem> Vivy</MenuItem>
            <MenuItem><SiVk /> Vk</MenuItem>
            <MenuItem><SiVerizon /> Verizon Media</MenuItem>
            <MenuItem><SiWarnerbrosDot /> Warner Bros</MenuItem>
            <MenuItem> Wave</MenuItem>
            <MenuItem> Wayfair</MenuItem>
            <MenuItem><SiLine /> WealthSimple</MenuItem>
            <MenuItem> Wolt</MenuItem>
            <MenuItem> WordPoints</MenuItem>
            <MenuItem><FaWordpress /> WordPress</MenuItem>
            <MenuItem> Workday</MenuItem>
            <MenuItem> WW International</MenuItem>
            <MenuItem><SiYelp /> Yelp</MenuItem>
            <MenuItem> Yoti</MenuItem>
            <MenuItem> YouPorn</MenuItem>
            <MenuItem><SiZendesk /> Zendesk</MenuItem>
            <MenuItem> Zenly</MenuItem>
            <MenuItem> Zomato</MenuItem>
          </SubMenu>
    );
};

export default HackerOnePrograms;