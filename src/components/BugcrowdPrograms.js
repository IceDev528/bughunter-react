import React from 'react';
import { useIntl } from 'react-intl';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBug, FaSun } from 'react-icons/fa';
import { Si1Password, SiAtlassian, SiTesla, SiBitdefender, SiCampaignmonitor, SiCanva, SiCisco, SiCashapp, SiDell, SiEtsy, SiFiat, SiFitbit, SiIndeed, SiIntercom, SiLastpass, SiMailchimp, SiNetflix, SiOpsgenie, SiPantheon, SiPrezi, SiSap, SiInvision, SiPinterest, SiScribd, SiSoundcloud, SiAmazonaws, SiAsana, SiDocusign, SiHelm, SiHubspot, SiHumblebundle, SiMastercard, SiMathworks, SiOpera, SiSeagate, SiSmartthings, SiSplunk, SiSquare, SiStackpath, SiStatuspage, SiTrello, SiTripadvisor, SiTwilio, SiTwitch, SiUpwork, SiWpengine, SiZoom, SiHulu } from 'react-icons/si';
import { GiAcorn, GiOctopus, GiHummingbird } from 'react-icons/gi';

const BugcrowdPrograms = () => {
    const intl = useIntl();

    return (
        <SubMenu title={intl.formatMessage({ id: 'bugcrowd' })} icon={<FaBug />} >
            <MenuItem> (ISC)²</MenuItem>
            <MenuItem><Si1Password /> 1Password</MenuItem>
            <MenuItem> 1Shoppingcart.com</MenuItem>
            <MenuItem> 23andMe</MenuItem>
            <MenuItem> 55 Degrees</MenuItem>
            <MenuItem> ALM Works</MenuItem>
            <MenuItem><SiAmazonaws /> AWS </MenuItem>
            <MenuItem> Accellion Inc</MenuItem>
            <MenuItem><GiAcorn /> Acorns Grow, Inc.</MenuItem>
            <MenuItem> Adaptavist</MenuItem>
            <MenuItem> Agilis LT</MenuItem>
            <MenuItem> Algorand</MenuItem>
            <MenuItem> Alpha Serve</MenuItem>
            <MenuItem> Amoeboids</MenuItem>
            <MenuItem> Appfire</MenuItem>
            <MenuItem> Apwide</MenuItem>
            <MenuItem> Arkose Labs</MenuItem>
            <MenuItem> Arkose Labs (Elite Challenges)</MenuItem>
            <MenuItem> Arlo Cash Rewards</MenuItem>
            <MenuItem> Arlo Kudos Rewards</MenuItem>
            <MenuItem> Artemis Software</MenuItem>
            <MenuItem><SiAsana /> Asana</MenuItem>
            <MenuItem> AssertThat</MenuItem>
            <MenuItem><SiAtlassian /> Atlassian</MenuItem>
            <MenuItem> Automation Consultants</MenuItem>
            <MenuItem> AvalonBay Communities</MenuItem>
            <MenuItem> Avira VPN</MenuItem>
            <MenuItem> Avisi</MenuItem>
            <MenuItem> Avito</MenuItem>
            <MenuItem> Barracuda Networks, Inc.</MenuItem>
            <MenuItem> beecom Products</MenuItem>
            <MenuItem> Bethesda.NET</MenuItem>
            <MenuItem> Better </MenuItem>
            <MenuItem> BetterHelp</MenuItem>
            <MenuItem> BigBrassBand</MenuItem>
            <MenuItem> Bigbank</MenuItem>
            <MenuItem> Bill.com</MenuItem>
            <MenuItem> Binance</MenuItem>
            <MenuItem> BitDiscovery</MenuItem>
            <MenuItem> BitSight Technologies</MenuItem>
            <MenuItem><SiBitdefender /> Bitdefender</MenuItem>
            <MenuItem><SiBitdefender /> Bitdefender Box v2</MenuItem>
            <MenuItem> Blend</MenuItem>
            <MenuItem> Block.one Smart Contracts</MenuItem>
            <MenuItem> Blue Jeans Network</MenuItem>
            <MenuItem> Bluehost</MenuItem>
            <MenuItem> Bolo Software</MenuItem>
            <MenuItem> Boozt Fashion</MenuItem>
            <MenuItem> Brex</MenuItem>
            <MenuItem> BrizoIT</MenuItem>
            <MenuItem> BugPoC</MenuItem>
            <MenuItem> Bugcrowd</MenuItem>
            <MenuItem> C3 Metrics</MenuItem>
            <MenuItem> CPOMS Systems Ltd</MenuItem>
            <MenuItem> Caffeine</MenuItem>
            <MenuItem> Caltex Australia</MenuItem>
            <MenuItem><SiCampaignmonitor /> Campaign Monitor</MenuItem>
            <MenuItem><SiCanva /> Canva</MenuItem>
            <MenuItem> Cara API</MenuItem>
            <MenuItem> Cara Payments</MenuItem>
            <MenuItem><SiCashapp /> Cash App</MenuItem>
            <MenuItem> Centrify</MenuItem>
            <MenuItem><SiCisco /> Cisco Meraki</MenuItem>
            <MenuItem> ClassDojo</MenuItem>
            <MenuItem> Cloud Conformity</MenuItem>
            <MenuItem> Cloudinary</MenuItem>
            <MenuItem> Cloudways</MenuItem>
            <MenuItem> Code.org</MenuItem>
            <MenuItem> Code42</MenuItem>
            <MenuItem> codefortynine</MenuItem>
            <MenuItem> Colined</MenuItem>
            <MenuItem> Comalatech</MenuItem>
            <MenuItem> Comcast</MenuItem>
            <MenuItem> CommonBond</MenuItem>
            <MenuItem> Communardo</MenuItem>
            <MenuItem> Constant Contact, Inc.</MenuItem>
            <MenuItem> Council on Foreign Relations</MenuItem>
            <MenuItem> Credit Karma</MenuItem>
            <MenuItem> Credit Kudos</MenuItem>
            <MenuItem> Cybrary</MenuItem>
            <MenuItem> Cylance</MenuItem>
            <MenuItem> Decadis AG</MenuItem>
            <MenuItem> Delivra</MenuItem>
            <MenuItem><SiDell /> Dell Technologies</MenuItem>
            <MenuItem><SiDell /> Dell.com</MenuItem>
            <MenuItem> Deutsche Bank: WMCRM</MenuItem>
            <MenuItem> Digistorm</MenuItem>
            <MenuItem> Directly</MenuItem>
            <MenuItem><SiDocusign /> DocuSign</MenuItem>
            <MenuItem> DraftKings</MenuItem>
            <MenuItem> draw.io</MenuItem>
            <MenuItem> Easy Agile</MenuItem>
            <MenuItem> eazyBI</MenuItem>
            <MenuItem> eero</MenuItem>
            <MenuItem> Electroneum</MenuItem>
            <MenuItem> Emma</MenuItem>
            <MenuItem><SiEtsy /> Etsy</MenuItem>
            <MenuItem> Exact Sciences NGPT</MenuItem>
            <MenuItem> ExpressVPN</MenuItem>
            <MenuItem> Fadaat Media</MenuItem>
            <MenuItem><SiFiat /> Fiat Chrysler Automobiles</MenuItem>
            <MenuItem> Files.com</MenuItem>
            <MenuItem> FireEye</MenuItem>
            <MenuItem><SiFitbit /> Fitbit</MenuItem>
            <MenuItem> FoxyCart</MenuItem>
            <MenuItem> GO-JEK</MenuItem>
            <MenuItem> Gap Inc.</MenuItem>
            <MenuItem> Gogo</MenuItem>
            <MenuItem> Gusto</MenuItem>
            <MenuItem> HOVER</MenuItem>
            <MenuItem> HealthifyMe</MenuItem>
            <MenuItem><SiHelm /> Helm</MenuItem>
            <MenuItem> hipages</MenuItem>
            <MenuItem><SiHubspot /> HubSpot</MenuItem>
            <MenuItem><SiHulu /> hulu</MenuItem>
            <MenuItem><SiHumblebundle /> Humble Bundle</MenuItem>
            <MenuItem><GiHummingbird /> Hummingbird</MenuItem>
            <MenuItem> IOTA Foundation Infrastructure</MenuItem>
            <MenuItem> IOTA RPCHub</MenuItem>
            <MenuItem> IOTA Trinity Wallet</MenuItem>
            <MenuItem> Ibotta</MenuItem>
            <MenuItem><SiInvision /> InVision </MenuItem>
            <MenuItem><SiInvision /> InVision Enterprise v7</MenuItem>
            <MenuItem><SiIndeed /> Indeed</MenuItem>
            <MenuItem> Inflection </MenuItem>
            <MenuItem> Innovalog</MenuItem>
            <MenuItem><SiIntercom /> Intercom</MenuItem>
            <MenuItem> iRobot</MenuItem>
            <MenuItem> Iterable</MenuItem>
            <MenuItem> Jora</MenuItem>
            <MenuItem> Jumbo Privacy</MenuItem>
            <MenuItem> K15t</MenuItem>
            <MenuItem> Keeper Security</MenuItem>
            <MenuItem> Kenna Security</MenuItem>
            <MenuItem> Kohl's</MenuItem>
            <MenuItem> Land of the Free</MenuItem>
            <MenuItem><SiLastpass /> LastPass</MenuItem>
            <MenuItem> Letgo</MenuItem>
            <MenuItem> Lifesize</MenuItem>
            <MenuItem> Lime</MenuItem>
            <MenuItem> lululemon</MenuItem>
            <MenuItem><SiMailchimp /> Mailchimp</MenuItem>
            <MenuItem> Mailgun </MenuItem>
            <MenuItem><SiMastercard /> MasterCard VDP</MenuItem>
            <MenuItem><SiMastercard /> Mastercard (VDP Extension)</MenuItem>
            <MenuItem><SiMastercard /> Mastercard SRC</MenuItem>
            <MenuItem><SiMastercard /> mastercard</MenuItem>
            <MenuItem><SiMathworks /> MathWorks</MenuItem>
            <MenuItem> Medallia</MenuItem>
            <MenuItem> Mettle</MenuItem>
            <MenuItem> Mixpanel</MenuItem>
            <MenuItem> Mohami</MenuItem>
            <MenuItem> Moneris</MenuItem>
            <MenuItem> Moneytree KK</MenuItem>
            <MenuItem> MyGeotab</MenuItem>
            <MenuItem> NEOGOV Public Assets</MenuItem>
            <MenuItem> NETGEAR Cash Rewards</MenuItem>
            <MenuItem> NETGEAR Kudos Rewards</MenuItem>
            <MenuItem> Naspers</MenuItem>
            <MenuItem> Nemetschek</MenuItem>
            <MenuItem> NeoPhotonics</MenuItem>
            <MenuItem><SiNetflix /> Netflix</MenuItem>
            <MenuItem> Netskope</MenuItem>
            <MenuItem> NextCapital John Hancock UAT</MenuItem>
            <MenuItem> NextRoll</MenuItem>
            <MenuItem> Nextup.ai</MenuItem>
            <MenuItem> NortonLifeLock</MenuItem>
            <MenuItem> OWASP CSRFGuard</MenuItem>
            <MenuItem> OWASP Java Encoder</MenuItem>
            <MenuItem> OWASP Java HTML Sanitizer</MenuItem>
            <MenuItem> OWASP® ZAP</MenuItem>
            <MenuItem><GiOctopus /> Octopus</MenuItem>
            <MenuItem> Okapya</MenuItem>
            <MenuItem> Okta</MenuItem>
            <MenuItem><SiOpera /> Opera Bug Bounty</MenuItem>
            <MenuItem><SiOpsgenie /> Opsgenie</MenuItem>
            <MenuItem> Optimizely</MenuItem>
            <MenuItem> Overstock</MenuItem>
            <MenuItem><SiPantheon /> Pantheon</MenuItem>
            <MenuItem> PathCheck</MenuItem>
            <MenuItem> PayU Single Platform</MenuItem>
            <MenuItem> Paysafe - Netbanx</MenuItem>
            <MenuItem> Peakon</MenuItem>
            <MenuItem> Personal Capital</MenuItem>
            <MenuItem> Phase Locked Software</MenuItem>
            <MenuItem><SiPinterest /> Pinterest</MenuItem>
            <MenuItem><SiPinterest /> Pinterest - Prelaunch Access</MenuItem>
            <MenuItem> PlanetHoster</MenuItem>
            <MenuItem> Practice Fusion</MenuItem>
            <MenuItem><SiPrezi /> Prezi Private Bug Bounty</MenuItem>
            <MenuItem> ProjectBalm</MenuItem>
            <MenuItem> PureVPN</MenuItem>
            <MenuItem> Qlik Cloud Services</MenuItem>
            <MenuItem> Qlik Compose for Data Warehouses and Replicate NGPT</MenuItem>
            <MenuItem> Queue-it</MenuItem>
            <MenuItem> Quizlet</MenuItem>
            <MenuItem> RSR Group</MenuItem>
            <MenuItem> RealSelf</MenuItem>
            <MenuItem> Redmoon</MenuItem>
            <MenuItem> Redox</MenuItem>
            <MenuItem> Refined</MenuItem>
            <MenuItem> Regions</MenuItem>
            <MenuItem> Resolution</MenuItem>
            <MenuItem> Revolut Business</MenuItem>
            <MenuItem> Revolut Retail</MenuItem>
            <MenuItem> Ricksoft</MenuItem>
            <MenuItem> RingCentral</MenuItem>
            <MenuItem><SiSap /> SAP Concur</MenuItem>
            <MenuItem><SiSap /> SAP Qualtrics XM</MenuItem>
            <MenuItem><SiSap /> SAP SuccessFactors</MenuItem>
            <MenuItem> SEEK </MenuItem>
            <MenuItem> Safety First!</MenuItem>
            <MenuItem> ScaleFT</MenuItem>
            <MenuItem><SiScribd /> Scribd, Inc</MenuItem>
            <MenuItem><SiSeagate /> Seagate VDP</MenuItem>
            <MenuItem> SecureDrop</MenuItem>
            <MenuItem> Segment</MenuItem>
            <MenuItem> Self Esteem Brands</MenuItem>
            <MenuItem> ServiceRocket</MenuItem>
            <MenuItem> Sezzle</MenuItem>
            <MenuItem> Sisu Data</MenuItem>
            <MenuItem> Skyscanner</MenuItem>
            <MenuItem> SmartBear</MenuItem>
            <MenuItem> SmartRent</MenuItem>
            <MenuItem><SiSmartthings /> SmartThings</MenuItem>
            <MenuItem> Socrata</MenuItem>
            <MenuItem> SoftComply</MenuItem>
            <MenuItem> Softdocs</MenuItem>
            <MenuItem> Soldevelo</MenuItem>
            <MenuItem> Sophos</MenuItem>
            <MenuItem><SiSoundcloud /> SoundCloud</MenuItem>
            <MenuItem> Spartez Software</MenuItem>
            <MenuItem><SiSplunk /> Splunk</MenuItem>
            <MenuItem><SiSplunk /> Splunk Enterprise Security</MenuItem>
            <MenuItem><SiSplunk /> Splunk Phantom</MenuItem>
            <MenuItem> Spot</MenuItem>
            <MenuItem> Sprout Social</MenuItem>
            <MenuItem><SiSquare /> Square</MenuItem>
            <MenuItem><SiSquare /> Square Open Source</MenuItem>
            <MenuItem><SiStackpath /> StackPath</MenuItem>
            <MenuItem><SiStatuspage /> Statuspage</MenuItem>
            <MenuItem> Step</MenuItem>
            <MenuItem> StiltSoft</MenuItem>
            <MenuItem> SurveyMonkey</MenuItem>
            <MenuItem> Synchrony</MenuItem>
            <MenuItem> TD Ameritrade</MenuItem>
            <MenuItem> TD Ameritrade Think or Swim</MenuItem>
            <MenuItem> TD Tradewise</MenuItem>
            <MenuItem> Takeaway.com</MenuItem>
            <MenuItem> TaskRabbit</MenuItem>
            <MenuItem> TechTime</MenuItem>
            <MenuItem> TechUp</MenuItem>
            <MenuItem> TechnologyOne</MenuItem>
            <MenuItem> Telefonica Argentina</MenuItem>
            <MenuItem> Telefonica Brazil</MenuItem>
            <MenuItem> Telefonica Colombia</MenuItem>
            <MenuItem> Telefonica Global Video</MenuItem>
            <MenuItem> Telefónica - Chile</MenuItem>
            <MenuItem> Telefónica - Spain</MenuItem>
            <MenuItem> Telefónica Germany</MenuItem>
            <MenuItem> Telefónica S.A.</MenuItem>
            <MenuItem> Tempo</MenuItem>
            <MenuItem><SiTesla /> Tesla</MenuItem>
            <MenuItem> The Scotts Miracle-Gro Company</MenuItem>
            <MenuItem> The Security Team Rocks</MenuItem>
            <MenuItem><FaSun /> The Sun</MenuItem>
            <MenuItem> TheFork - B2C - WNG</MenuItem>
            <MenuItem> ThinkTilt</MenuItem>
            <MenuItem> Threat Stack</MenuItem>
            <MenuItem> Toast</MenuItem>
            <MenuItem> ToolsPlus</MenuItem>
            <MenuItem> TransferWise</MenuItem>
            <MenuItem><SiTrello /> Trello</MenuItem>
            <MenuItem><SiTripadvisor /> TripAdvisor </MenuItem>
            <MenuItem> Truecar</MenuItem>
            <MenuItem><SiTwilio /> Twilio</MenuItem>
            <MenuItem><SiTwitch /> Twitch.tv</MenuItem>
            <MenuItem> UNDER ARMOUR</MenuItem>
            <MenuItem> USAA</MenuItem>
            <MenuItem> Unilever</MenuItem>
            <MenuItem><SiUpwork /> Upwork</MenuItem>
            <MenuItem> venITure</MenuItem>
            <MenuItem> Verisign</MenuItem>
            <MenuItem> Viator</MenuItem>
            <MenuItem> Virtru</MenuItem>
            <MenuItem> Vision Critical</MenuItem>
            <MenuItem> Vonage</MenuItem>
            <MenuItem> WBI Energy - Transmission</MenuItem>
            <MenuItem> WHMCS Client Management Portal</MenuItem>
            <MenuItem><SiWpengine /> WP Engine</MenuItem>
            <MenuItem> Walmart</MenuItem>
            <MenuItem> Web.com</MenuItem>
            <MenuItem> Weebly</MenuItem>
            <MenuItem> WestJet</MenuItem>
            <MenuItem> Western Union</MenuItem>
            <MenuItem> Western Union Kudos </MenuItem>
            <MenuItem> Whatfix</MenuItem>
            <MenuItem> Workiva</MenuItem>
            <MenuItem> WorldRemit</MenuItem>
            <MenuItem> Xfinity Home &amp; xFi</MenuItem>
            <MenuItem> Yasoon</MenuItem>
            <MenuItem> You Need a Budget (YNAB)</MenuItem>
            <MenuItem> Zappos.com</MenuItem>
            <MenuItem> Zilliqa</MenuItem>
            <MenuItem><SiZoom /> Zoom Video Communications</MenuItem>
            <MenuItem> Zscaler</MenuItem>
            <MenuItem> Zynga - Paid Bounty</MenuItem>
            <MenuItem> Zynga - Whitehat Points</MenuItem>
        </SubMenu>
    );
};

export default BugcrowdPrograms;