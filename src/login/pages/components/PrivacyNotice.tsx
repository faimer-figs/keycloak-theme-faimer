import { X } from 'lucide-react';

export const PrivacyNotice = ({ onClose }: { onClose: () => void }) => {
  return (
    <div style={{ color: 'black !important' }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-hidden z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h1 className="text-xl text-black">Privacy Notice</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="Close privacy notice"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          <div className="space-y-8">
            <section>
              <p className="text-black">
                Intealth and its member organizations, the Educational Commission for Foreign Medical Graduates (ECFMG®)
                and
                the Foundation for Advancement of International Medical Education and Research (FAIMER®) are committed
                to
                protecting the privacy and security of your Data, including Personally Identifiable Information
                (&quot;PII&quot;)
                (collectively &quot;Data&quot;). For purposes of this Privacy Notice (<b>&quot;Privacy Notice&quot;</b>),
                Intealth refers to: ECFMG and FAIMER (hereinafter referred to collectively
                as &quot;Intealth,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;). This Privacy Notice explains how we collect, process, use, and
                disclose your
                Data (i) in connection with, and in support of, our programs and services; (ii) in connection with your
                participation in
                Intealth-related educational and professional forums and collaborations; (iii) in support of our
                research endeavors; and/or (iv)
                in connection with an application for employment with Intealth.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">Acceptance of Privacy Notice</h2>
              <p className="text-black">
                Your use of the Intealth websites, programs and services, mobile applications, and related
                administrative processes signifies
                your understanding and acceptance of the terms of this Privacy Notice. If you do not agree to the terms
                of this Privacy Notice,
                please do not submit your PII or any PII you are responsible for to Intealth or use its websites,
                programs and services, and mobile
                applications. Further, your continued use of Intealth websites, programs and services, and mobile
                applications following our posting
                amendments to the Privacy Notice signifies your acceptance of the Privacy Notice as amended.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">Nature of Services Provided</h2>
              <p className="text-black">
                Intealth provides programs and services to individuals and to organizations including certification,
                professional verification,
                credentialing, training, educational opportunities, and visa sponsorship. Intealth also collaborates in
                research, publications,
                and educational opportunities and makes employment opportunities available to individuals seeking to
                join our teams.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">PII and Other Data We Collect</h2>
              <p className="text-black">
                We collect PII and other Data either directly from you, through automatic technologies, and from third
                parties or publicly
                available sources, as follows:
              </p>

              <h3 className="text-lg font-medium text-primary mt-4 mb-2">Data Collected from You</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <b>Users in Connection with and in Support of Our Programs and Services.</b>
                  We collect the following PII directly from individuals in order to provide our programs and services
                  including some PII
                  that may be considered sensitive PII under the applicable law in the jurisdiction where you reside.
                  The PII we collect may
                  include but is not limited to an individual&quot;s: name; image; address(es); e-mail address(es);
                  birth date; birth country;
                  passport and visa information; national identification numbers; ECFMG/ United States Medical
                  Licensing Examination® (USMLE®) number;
                  medical license number, licensing jurisdiction, and licensing dates; gender; ethnicity; citizenship;
                  birth certificate; marriage
                  certificate; relevant information about any claimed disability; driver&#39;s license information;
                  financial information; and educational
                  and work experience. For those Users seeking visa sponsorship, we collect PII of family members and
                  dependents (including minors)
                  also seeking sponsorship (under a J-2 Visa), as follows: name, gender, date of birth, birth city,
                  passport number, country(ies)
                  of citizenship, country of legal personal residence, e-mail address, Student and Exchange Visitor
                  Information System (SEVIS) number,
                  and USMLE number (where applicable). Copies of passports, marriage certificates, and birth
                  certificates must also be provided in
                  support of sponsorship.
                  <br /><br />
                  In order to facilitate payment for our programs and services, we use third-party payment services
                  through PayPal and Telecheck,
                  which directly collect your financial Data (for example, your bank account information or credit
                  card details); the financial
                  Data you submit electronically is not collected, processed, or retained by Intealth. The use of your
                  financial Data is governed
                  by the Privacy Policies of those entities.
                  <br /><br />
                  In very limited instances, our programs and services permit Users to submit payment by providing
                  financial Data directly to us
                  using a paper form. In the event you elect to make a payment in this manner, your financial Data
                  will be processed only for
                  purposes of payment and will be deleted within one year of collection.
                </li>
                <li>
                  <b>Users Supporting Intealth or Participating in Educational and Professional Forums.</b> PII is also
                  collected from individuals
                  working for organizations assisting Intealth to fulfill its services, donors, and individuals
                  attending and/or presenting at
                  Intealth educational and professional forums. The PII collected from such Users includes but is not
                  limited to: name, title,
                  address(es), date of birth, birth country, e-mail addresses, phone numbers, and professional
                  credentials.
                </li>
                <li>
                  <b>Users Seeking Employment Opportunities.</b> Intealth generally collects the following PII from
                  Users seeking professional
                  opportunities with Intealth: name, address(es), e-mail address, phone numbers, gender, ethnicity,
                  veteran status,
                  disability status, education history, employment history, professional references, required background
                  clearance data,
                  and other job-related information.
                </li>
              </ul>

              <p className="text-black my-4">
                In most instances, collection of this PII is required for Intealth to provide the requested
                opportunities and/or programs
                and services, or in other instances may be required by law. Non-provision of certain information may bar
                our ability to
                provide you with these opportunities and/or the requested programs and services.
              </p>

              <h3 className="text-lg font-medium text-primary mt-6 mb-2">Data Collected Automatically</h3>
              <p className="text-black mb-4">
                Intealth websites and mobile applications collect certain Data about you automatically,
                using certain passive technologies. Such Data includes technical information about browser type, areas
                of the site visited,
                date and time of access, and related data in order to improve the overall quality of your on-line
                experience.
                These passive technologies include:
              </p>

              <div className="space-y-4">
                <div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <i><b>Web Server Logs and IP Addresses.</b></i> Internet Protocol (&#34;IP&#34;) addresses and
                      mobile device identifiers are numbers
                      that identify the computer or device that you use to access the Internet. Depending on the way in
                      which you access
                      the Internet and where you access the Internet, your IP address may always be the same or very
                      similar each time
                      you access the Internet, or may change each time you access the Internet. Intealth systems
                      automatically collect
                      IP addresses and mobile device identifiers to enable our servers to send you the web pages that
                      you request via your
                      Internet Service Provider. We will never use your IP address to specifically target your location,
                      but we may use your
                      IP address to target the general geographic area from which you are visiting our website where
                      there is a business need and a
                      lawful basis to do so. We may use your IP address for security purposes, administering and
                      maintaining our websites,
                      to support our applications and the services that you access, for calculating our website usage
                      levels, for the prevention
                      and investigation of fraudulent activities, and/or for other business practice improvement.
                    </li>
                    <li>
                      <i><b>Cookies.</b></i> A &#34;cookie&#34; is a data file that a website sends to your browser,
                      which then stores it on the device you are using
                      to browse the website. Intealth uses different types of cookies to improve delivery of your
                      on-line experience.
                      Cookies do not personally identify Users, although they allow our web servers to differentiate one
                      User from another.
                      Cookies also allow us to transact business with you on the Internet. Strictly necessary cookies
                      are cookies necessary
                      to enable the basic features of Intealth websites to function and/or to provide a service that you
                      have specifically requested.
                      Performance and analytics cookies allow us to measure and improve our performance and provide us
                      with information about
                      how our websites are used and how visitors move around our website. One specific type of
                      performance and analytics
                      cookie we use is Google Analytics. We use Google Analytics to assist us with understanding how
                      Users interact with and use our
                      website, which helps us improve our websites, applications, and offerings. Please refer to the
                      Google Analytics
                      Terms of Use and Privacy Policy for information regarding how Google may use and share the
                      information collected by
                      Google Analytics. You can opt out of being tracked by Google Analytics by visiting
                      http://tools.google.com/dlpage/gaoptout.
                      Functional cookies allow us to analyze your use of our websites to evaluate and improve our
                      performance and to enhance and
                      personalize your User experience by remembering User login details and other preferences.
                      Non-essential cookies allow
                      Intealth to keep track of Users who return to our website and for Users to share certain pages
                      with social networks.
                      Intealth uses all types of cookies on its websites and mobile applications. You can set your
                      browser to refuse cookies
                      except for strictly necessary cookies. However, disabling cookies may impact your ability to
                      navigate all Intealth websites&apos; functionality.
                    </li>
                    <li>
                      <i><b>Web Beacons.</b></i> Intealth web pages may use web beacons in conjunction with cookies to
                      compile aggregate statistics
                      about website usage. A web beacon is an electronic image (also referred to as an &#34;action
                      tag,&#34;
                      &#34;single-pixel,&#34; or &#34;clear GIF&#34;) commonly used to track User traffic patterns from
                      one web
                      page to another in order to maximize web traffic flow and to otherwise analyze the effectiveness
                      of our websites.
                      Some web beacons may be unusable if you refuse their associated cookies.
                    </li>
                    <li>
                      <i><b>&quot;Do-Not-Track&quot;</b></i> Signals. Some web browsers
                      transmit &quot;do-not-track&quot; signals to our websites.
                      Although web browsers may incorporate and activate this functionality in different ways, Intealth
                      currently does
                      not respond to these signals.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl  text-primary mb-3">Data Collected from Third Parties</h2>
              <p className="text-black">
                We may also use or supplement the Data we have about you with information provided by other sources,
                such as the USMLE program,
                National Board of Medical Examiners® (NBME®), the National Resident Matching Program® (NRMP®), American
                Medical Association (AMA),
                Federation of State Medical Boards (FSMB), Association of American Medical Colleges (AAMC),
                Accreditation Council for Graduate Medical
                Education (ACGME), the Department of State (DOS), the Department of Homeland Security (DHS), medical
                schools, graduate medical education
                and training programs, current and former employers, licensing and regulatory authorities, professional
                organizations, and other
                organizations with which we collaborate in the provision of our programs and services. Where such
                information is received, Intealth
                will only use that data for the limited purposes for which it was provided to us.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">How We Use Personal Information</h2>
              <p className="text-black mb-4">Intealth may use your PII to:</p>
              <ul className="list-disc pl-6 space-y-2 text-black">
                <li>Establish the applicable User account in our systems (e.g., as an applicant for our programs and
                  services or as an applicant for job opportunities);
                </li>
                <li>Process and fulfill requests for Intealth programs and services and employment opportunities;</li>
                <li>Provide administrative notices and alerts to inform you of relevant aspects of programs and services
                  (&#34;administrative e-mails&#34;);
                </li>
                <li>Deliver newsletters and promotional materials that support Intealth&apos;s mission and mandate
                  (&#34;promotional e-mails&#34;);
                </li>
                <li>Provide customer service in connection with our programs and services and employment
                  opportunities;
                </li>
                <li>Respond to legitimate business inquiries;</li>
                <li>Support professional work and educational opportunities;</li>
                <li>Confirm the identity of officials who verify credentials at verifying organizations;</li>
                <li>Perform analyses and other internal assessments to administer our business and to improve the
                  quality of Intealth business and service offerings;
                </li>
                <li>Provide information and donor opportunities to support Intealth&apos;s work and mission;</li>
                <li>Facilitate engagement by alumni from our educational programs, including but not limited to alumni
                  of our FAIMER regional institutes;
                </li>
                <li>Address legal and regulatory inquiries made in the interests of serving the public;</li>
                <li>Maintain permanent records of Users of Intealth programs and services as necessary to prevent fraud
                  and serve the interests of the public;
                </li>
                <li>Complete regulatory audits and compliance investigations;</li>
                <li>Respond to inquiries from governmental and regulatory authorities;</li>
                <li>Conduct statistical research and analysis that support our programs and services, mission, and other
                  business interests;
                </li>
                <li>Monitor for fraud and security threats; and/or</li>
                <li>Fulfill any other purpose for which it was collected or provided to us, as stated at the time of
                  collection, or as otherwise implied based on the context of the collection.
                </li>
              </ul>

              <p className="text-black mt-4">
                Intealth uses e-mail addresses collected for administrative and promotional purposes. Administrative
                e-mails are necessary to
                keep Users informed about critical aspects of programs and services. These must be received by Users in
                a timely manner.
                Therefore, the option to unsubscribe from administrative e-mails and alerts is not available to Users.
                However,
                if you wish to opt-out of promotional e-mails, please follow the unsubscribe instructions provided
                within individual
                newsletters and/or promotional e-mails.
                <br /><br />
                Intealth reserves the right to aggregate PII provided by Users for statistical analysis and on-going
                research in
                accordance with our mission. To this end, Intealth compiles PII into aggregated data groups. Intealth
                may de-identify
                or pseudonymize the PII for statistically accurate data analysis without risking exposure of PII. Such
                data groups
                may then be shared with business partners, service providers, and/or vendors of Intealth or published on
                our website,
                in academic journals, or in presentations.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">Basis for Processing PII</h2>
              <p className="text-black mb-4">
                Applicable law in certain countries, including but not limited to countries in the European Economic
                Area,
                require that we collect and process PII only where we have an identified lawful basis to do so under
                applicable law.
                Depending on the program and service and/or opportunity provided and/or the processing activity
                involved, we collect and
                process your PII only where we have one of the following lawful bases to do so:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-black">
                <li><i><b>You Provide Your Consent:</b></i> You provide us with consent to collect and process your PII
                  for a specific purpose;
                </li>
                <li><i><b>We Must Do So to Perform Our Contract with You:</b></i> We process your PII to fulfill your
                  request to provide programs and services or other opportunities;
                </li>
                <li><i><b>We Have a Legitimate Interest:</b></i> We have a legitimate interest to process your PII that
                  is not overridden by your interests, fundamental rights, or freedoms; and/or
                </li>
                <li><i><b>We Must Do So to Comply with Legal Obligations:</b></i> We process your PII if it is necessary
                  for us to comply with our legal obligations.
                </li>
              </ul>

              <p className="text-black mt-4">
                Where we process &quot;special&quot; or &quot;sensitive&quot; categories of PII, as defined by the
                General Data Protection Regulation, we do so only: (i) where you have given us your explicit consent to
                carry out such processing; or (ii) as otherwise permitted by law.
                <br /><br />
                If you have questions or concerns about the lawful basis for which we collect and process your PII,
                please contact <a href="mailto:privacy@ECFMG.org" className="text-primary">privacy@ECFMG.org</a> or
                <a href="mailto:privacy@FAIMER.org"className="text-primary">privacy@FAIMER.org</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-lightBlue mb-3">Personal Information of Minors</h2>
              <div className="space-y-4 text-black">
                <p>
                  Except as noted below, minors (i.e., persons under 18 years of age) are not eligible for participation
                  in Intealth programs or services, and/or employment opportunities. Therefore, Intealth does not
                  intentionally collect PII from minors. If Intealth identifies that a minor has submitted PII, we will
                  take all reasonable steps necessary to delete the PII from our databases and not use or retain it for
                  any purpose. Further, if you believe a minor has submitted PII to Intealth, please contact us at:
                  privacy@ECFMG.org or privacy@FAIMER.org.
                </p>
                <p>
                  Intealth provides visa sponsorship for authorized foreign national physicians and unmarried, minor
                  dependents of such authorized foreign national physicians under the age of 21. Under such sponsorship
                  and to meet J-1/J-2 visa requirements, Intealth must collect PII of minor dependents for U.S.
                  government agencies; however, such information is collected from the authorized foreign national
                  physician, not the minor dependent.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">Data Retention and Destruction</h2>
              <p className="text-black">
                Intealth retains your Data for as long as necessary to fulfill the purposes we collected it for, for the
                duration of our business relationship with you, and in accordance with our Data Retention and
                Destruction Policy. Intealth may maintain a lawful basis for retaining certain PII indefinitely, for
                example, where Intealth services are benefiting the public interest in the area of public health, such
                as through verification of professional credentials. PII deleted from our active database in accordance
                with our Policy may be retained in de-identified format for research, data aggregation, and statistical
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">How We Disclose and Share PII</h2>
              <p className="text-black">
                We may disclose and share your PII with third parties, as follows:
              </p>
              <h3 className="text-lg font-medium text-primary mt-4 mb-2">
                To Parties Authorized by Users
              </h3>
              <p className="text-black">
                Fulfillment of Intealth&quot;s programs and services or other opportunities often requires disclosure of
                PII to third parties. In such instances, Users provide explicit consent to such Intealth-defined uses
                and
                disclosures, and Intealth discloses limited and necessary PII about Users. Such disclosures may be made
                to
                the following, as applicable:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black">
                <li>
                  Organizations assisting Intealth to fulfill its programs and services, including but not limited to
                  verifying institutions (such as medical schools and post-graduate training institutions), identity
                  verification providers, translation providers, test providers, USMLE, ACGME, NBME, NRMP, and the FSMB;
                </li>
                <li>Other organization(s) or individual(s) in order to facilitate ongoing services;</li>
                <li>U.S. or international governmental agencies and other organizations, including medical and other
                  regulatory authorities; and/or
                </li>
                <li>Any other individual, organization, or government or regulatory authority that a User specifies
                  should receive the information.
                </li>
              </ul>

              <p className="text-black mt-4">
                There may be circumstances where you would like information in your Intealth records to be disclosed to
                a
                third party, such as a friend or family member. We will not disclose your information to such
                individuals
                unless you have authorized us to do so.
                <br /><br />
                Intealth may also disclose PII to third parties, such as hospitals or medical regulatory authorities,
                where you have given such third parties authorization to obtain such information from Intealth.
              </p>

              <h3 className="text-lg font-medium text-primary mt-6 mb-2">
                To External Third Parties Under Contractual Relationships with Intealth
              </h3>
              <p className="text-black">
                Intealth may disclose or provide access to your PII with vendors and service providers, including but
                not limited to the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black">
                <li>IT and systems administration services (such as cloud hosting services and e-mail or mail
                  solutions);
                </li>
                <li>PCI-compliant payment processing solutions (e.g., PayPal, TeleCheck);</li>
                <li>Internet Service Providers;</li>
                <li>Services that assist in processing employment applications;</li>
                <li>Personnel administration services;</li>
                <li>Vendors and services that assist with certification, credentialing, and visa sponsorship operations,
                  including but not limited to identity verification providers, translation providers, test providers
                  (including but not limited to English language proficiency testing providers), and investigative
                  firms;
                </li>
                <li>Professional advisors such as lawyers, bankers, auditors, and insurers; and</li>
                <li>Program and other surveys (e.g., SurveyMonkey).</li>
              </ul>

              <p className="text-black mt-4">
                Where such disclosures are made, they are governed by agreements (such as confidentiality agreements,
                data sharing agreements, and data processing agreements) that require protection of your PII and that
                only permit use of your PII in a manner consistent with this Privacy Notice.
              </p>

              <h3 className="text-lg font-medium text-primary mt-6 mb-2">
                To Protect Our Legal Rights and Interests or Where Required by Law
              </h3>
              <p className="text-black">
                Intealth may disclose PII to respond to valid subpoenas, court orders, legal processes, medical or other
                regulatory authority inquiries and investigations, or other governmental inquiries and investigations;
                to exercise our own legal rights to defend against legal claims/suits; to investigate, prevent, or take
                action against illegal activities, suspected fraud, or situations involving potential threats to the
                physical safety of any person or the general public; or as otherwise required by law.
              </p>

              <h3 className="text-lg font-medium text-primary mt-6 mb-2">
                In the Event of a Change in Corporate Status
              </h3>
              <p className="text-black">
                In the event that Intealth is involved in a merger, acquisition, sale of assets, bankruptcy, and/or
                reorganization, your Data may be sold or transferred as part of that transaction. Any Agreement with
                such new entity or receiver will include appropriate privacy protections.
              </p>

              <h3 className="text-lg font-medium text-primary mt-6 mb-2">
                No Disclosures for Direct Marketing and Advertising
              </h3>
              <p className="text-black">
                At this time, Intealth does not disclose, sell, rent, license, grant access to, or trade PII with third
                parties for direct marketing.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">Cross-Border Transfers of PII</h2>
              <p className="text-black">
                All PII collected and/or received by Intealth is stored and maintained on servers in the United States,
                where national and state privacy laws may not afford the same level of protection as where you reside.
                Further, fulfillment of many of our programs and services require the cross-border transfer of PII from
                Intealth to other countries, for example, to verify an individual&#39;s credentials and/or to provide
                information to international medical regulatory authorities; similarly, the national and state privacy
                laws in those countries may not afford the same level of protection as where you reside.
              </p>
              <p className="text-black">
                By using Intealth&apos;s programs and services, you consent to the transfer of information to countries
                outside your residence, including but not limited to the United States, and acknowledge that your
                personal
                information will be processed in the United States. Intealth also employs cross-border transfer
                safeguards
                (including but not limited to standard contractual clauses) as applicable and appropriate to protect the
                privacy and security of your PII, and to use it in a manner strictly consistent with the purposes for
                which
                it is provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">Data Privacy and Security</h2>
              <p className="text-black">
                Intealth has implemented reasonable administrative, technical, and organizational safeguards to protect
                against foreseeable risks of unauthorized access, use, disclosure, destruction, or modification of PII
                and its information systems.
              </p>
              <p className="text-black mt-4">
                Please note, however, that despite the best efforts of Intealth, the confidentiality and security of
                information and Data transmitted to/from Intealth cannot be guaranteed as completely safe from
                intrusion.
              </p>
              <p className="text-black mt-4">
                Please do your part to protect the personal information that you share with Intealth. Keep your
                username,
                password, or other authentication information secure and limit the dissemination of your account
                information to third parties to those circumstances where dissemination is absolutely necessary.
                If you believe that your username, password, or other information associated with your Intealth account
                has been compromised, please contact us at: privacy@ECFMG.org or privacy@FAIMER.org.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">Data Protection Rights</h2>
              <p>Depending on where you reside, your local privacy laws, including but not limited to the European Union’s
                General Data Protection Regulation, may provide you with certain rights with respect to your PII, as follows:
              </p>
              <h3 className="text-lg font-medium text-primary mt-4 mb-2">Access, Review, and Rectification</h3>
              <p className="text-black">
                Some Users may have the right to access and review their PII collected and maintained by Intealth, with
                limited restrictions. Users can submit a formal request for access and review by contacting
                privacy@ECFMG.org or privacy@FAIMER.org. All such requests will be tracked and responded to in a timely
                manner, not to exceed 30 calendar days from the date of the request. Most Intealth services include
                password-protected portals where Users can review, correct, and update their PII in lieu of submitting a
                formal request.
              </p>

              <h3 className="text-lg font-medium text-primary mt-6 mb-2">Erasure and Restricting Processing</h3>
              <p className="text-black">
                Under certain circumstances, some Users may have the right to request that their PII be deleted or
                removed
                from Intealth&quot;s systems. This right is not absolute. Many of Intealth&quot;s services are intended
                to prevent fraud and to serve the public interest in the area of public health. As a provider of these
                services, Intealth may have a lawful basis to refuse User requests for erasure of PII and/or to refuse
                User requests to restrict or object to processing PII.
              </p>

              <h3 className="text-lg font-medium text-primary mt-6 mb-2">Filing Complaints</h3>
              <p className="text-black">
                Applicable Users have the right to make a complaint to Intealth by contacting privacy@ECFMG.org
                or privacy@FAIMER.org, and/or to request that Intealth direct the User to relevant supervisory
                authorities to file a formal complaint.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">Privacy Notices of Unaffiliated Third-Party
                Websites</h2>
              <p className="text-black">
                This Privacy Notice applies only to Intealth and Intealth&quot;s privacy practices. The Intealth website
                and mobile applications include links to unaffiliated third-party websites and applications whose
                privacy
                practices may be different than ours. Users clicking on these links should be aware that they are
                leaving
                the Intealth website and/or application and are accessing the unaffiliated third-party website. Users
                should
                review the Privacy Notice of the unaffiliated third-party website before engaging their services or
                products.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">Changes to This Privacy Notice</h2>
              <p className="text-black">
                This Privacy Notice may be amended from time to time as new features, programs, and services are made
                available,
                as laws and regulations change, or as otherwise necessary and appropriate. Notice about amendments to
                the
                Privacy Notice will be communicated by administrative e-mails, posted on-line, or by other appropriate
                methods.
                User access and/or on-going use of Intealth programs, services, websites, and/or mobile applications
                after such
                amendments signifies acceptance of the Privacy Notice, as amended. The most current version of the
                Privacy Notice
                is available at www.ECFMG.org and www.FAIMER.org and includes the date the Privacy Notice was last
                updated.
              </p>
            </section>

            <section>
              <h2 className="text-xl  text-lightBlue mb-3">How to Contact Us</h2>
              <p className="text-black">
                If you have questions about the terms of this Privacy Notice or if you need more information, please
                contact Intealth at:
              </p>
              <div className="text-black mt-4">
                <p><strong>Intealth</strong></p>
                <p>Attn: Privacy Office</p>
                <p>3624 Market Street</p>
                <p>Philadelphia PA 19104 USA</p>
                <p>+(215) 386-5900</p>
                <p>Email: privacy@ECFMG.org, privacy@FAIMER.org</p>
              </div>
              <p className="text-black mt-4">
                <strong>Last Updated: February 28, 2022</strong>
              </p>
            </section>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 sticky bottom-0 bg-white">
          <div className="flex justify-end">
            <button
                onClick={onClose}
                className="px-6 py-2 bg-primary text-white rounded hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice;
