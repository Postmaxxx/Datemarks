'use client'
import { useAppContext } from '@/hooks/useAppContext'
import './privacy.scss'


const SectionPrivacy = () => {
	const { lang } = useAppContext()

	return (
		<section className='section_privacy section_text'>
			<div className="section__content">
				<div className="container_page container_content">
					<h1>{lang === 'en' ? 'Privacy Policy' : 'FR Privacy'}</h1>
					<h2>Welcome To Our Privacy Policy</h2>
					<p>Last updated: <b>July 10, 2023</b></p>
					<p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
					<p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
					<h2>Interpretation and Definitions</h2>
					<h3>Interpretation</h3>
					<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
					<h3>Definitions</h3>
					<p>For the purposes of this Privacy Policy:</p>
					<ul>
						<li><em>Account</em> means a unique account created for You to access our Service or parts of our Service.</li>
						<li><em>Application</em> means the software program provided by the Company downloaded by You on any electronic device, named Datemarks app.</li>
						<li><em>Company</em> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Datemarks app.</li>
						<li><em>Device</em> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
						<li><em>Personal Data</em> is any information that relates to an identified or identifiable individual.</li>
						<li><em>Service</em> refers to the Application.</li>
						<li><em>Service provider</em> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
						<li><em>Usage Data</em> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
						<li><em>You</em> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
					</ul>
					<h3>Your Privacy Is Critically Important To Us.</h3>
					<p>It is Datemarks policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to Datemarks (hereinafter, “us”, “we”, or “Datemarks We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy (“Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
					<p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p>
					<p>Datemarks also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users creating events on Datemarks. Datemarks only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>
					<h2>Collecting and Using Your Personal Data</h2>
					<h3>Types of Data Collected</h3>
					<h4>Personal Data</h4>
					<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Certain visitors to Datemarks websites choose to interact with Datemarks in ways that require Datemarks to gather personally-identifying information. The amount and type of information that Datemarks gathers depends on the nature of the interaction. For example, we ask visitors who sign up for an account at Datemarks to provide a username and email address. Personally identifiable information may include, but is not limited to:</p>
					<ul>
						<li>Usage Data</li>
					</ul>
					<h4>Usage Data</h4>
					<p>Usage Data is collected automatically when using the Service.</p>
					<p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
					<p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
					<p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
					<h4>Cookies</h4>
					<p>To enrich and perfect your online experience, Datemarks uses “Cookies”, similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</p>
					<p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Datemarks uses cookies to help Datemarks identify and track visitors, their usage of Datemarks and their website access preferences. visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Datemarks websites, with the drawback that certain features of Datemarks websites may not function properly without the aid of cookies.</p>
					<p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Datemarks use of cookies.</p>
					<h4>Information Collected while Using the Mobile Application</h4>
					<p>While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:</p>
					<ul>
						<li>Pictures and other information from your Device's camera and photo library</li>
					</ul>
					<p>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.</p>
					<p>You can enable or disable access to this information at any time, through Your Device settings.</p>
					<p>The app does use third-party services that may collect information used to identify you.</p>
					<p>Link to the privacy policy of third-party service providers used by the app</p>
					<ul>
						<li><a className='underline' target='_blank' aria-label="Open the link in a new window" href="https://www.google.com/policies/privacy/">Google Play Services</a></li>
						<li><a className='underline' target='_blank' aria-label="Open the link in a new window" href="https://support.google.com/admob/answer/6128543?hl=en">AdMob</a></li>
						<li><a className='underline' target='_blank' aria-label="Open the link in a new window" href="https://imagekit.io/privacy-policy-new/">Imagekit.io</a></li>
						<li><a className='underline' target='_blank' aria-label="Open the link in a new window" href="https://www.mapbox.com/legal/privacy">Mabox</a></li>
						<li><a className='underline' target='_blank' aria-label="Open the link in a new window" href="https://www.amity.co/legal/privacy-policy">Amity</a></li>
					</ul>
					<h3>Use of Your Personal Data</h3>
					<p>The Company may use Personal Data for the following purposes:</p>
					<ul>
						<li><em>To provide and maintain our Service</em>, including to monitor the usage of our Service.</li>
						<li><em>To manage Your Account:</em> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
						<li><em>For the performance of a contract:</em> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
						<li><em>To contact You:</em> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
						<li><em>To provide You</em> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
						<li><em>To manage Your requests:</em> To attend and manage Your requests to Us.</li>
						<li><em>For business transfers:</em> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
						<li><em>For other purposes:</em> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
					</ul>
					<p>We may share Your personal information in the following situations:</p>
					<ul>
						<li><em>With Service Providers:</em> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
						<li><em>For business transfers:</em> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
						<li><em>With business partners:</em> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
						<li><em>With other users:</em> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
						<li><em>With Your consent:</em> We may disclose Your personal information for any other purpose with Your consent.</li>
					</ul>
					<h3>Retention of Your Personal Data</h3>
					<p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
					<p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
					<h3>Transfer of Your Personal Data</h3>
					<p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
					<p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
					<p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
					<h3>Disclosure of Your Personal Data</h3>
					<h4>Business Transactions</h4>
					<p>If Datemark or substantially all of its assets, were acquired, or in the unlikely event that Datemarks goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Datemarks may continue to use your personal information as set forth in this policy.</p>
					<h4>Law enforcement</h4>
					<p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
					<h4>Other legal requirements</h4>
					<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
					<ul>
						<li>Comply with a legal obligation</li>
						<li>Protect and defend the rights or property of the Company</li>
						<li>Prevent or investigate possible wrongdoing in connection with the Service</li>
						<li>Protect the personal safety of Users of the Service or the public</li>
						<li>Protect against legal liability</li>
					</ul>
					<h3>Security of Your Personal Data</h3>
					<p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

					<h2>Children's Privacy</h2>
					<p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
					<p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>

					<h2>Links to Other Websites</h2>
					<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
					<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

					<h4>Datemarks Uses Google AdWords For Remarketing</h4>
					<p>Datemarks uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven’t completed a task on our site, for example using the contact form to make an enquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone’s past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google’s privacy policy. uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven’t completed a task on our site, for example using the contact form to make an enquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone’s past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google’s privacy policy.We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
					<p>You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.</p>

					<h4>Aggregated Statistics</h4>
					<p>Datemarks may collect statistics about the behavior of visitors to its website. Datemarks may display this information publicly or provide it to others. However, Datemarks does not disclose your personally-identifying information.</p>

					<h2>Changes to this Privacy Policy</h2>
					<p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page</p>

					<h4>Contact Information</h4>
					<p>If you have any questions about this Privacy Policy, please contact us via email (mailto:datemarksapp@gmail.com).</p>

				</div>
			</div>
		</section>
	)
}

export default SectionPrivacy