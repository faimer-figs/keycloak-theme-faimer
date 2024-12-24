import { X } from 'lucide-react';

export const TermsAndConditions = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-hidden z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <h1 className="text-xl text-black">Terms and Conditions</h1>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close terms and conditions"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="overflow-y-auto flex-1 p-6">
                    <div className="space-y-8 text-gray-700">
                        <section>
                            <p>
                                Welcome to the Educational Commission for Foreign Medical Graduates web sites and mobile
                                application (collectively, the &#34;Services&#34;) owned and operated by the Educational Commission
                                for Foreign Medical Graduates (&#34;CFML&#34;), a member of Intealth. This page contains the terms,
                                covenants, conditions, and provisions (the &#34;Terms and Conditions&#34;) upon which you (the &#34;User&#34;)
                                may access and use these Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl  text-lightBlue mb-3 pb-4 border-b-2 border-b-gray-100">Terms and Conditions</h2>
                            <p>
                                By using the Services, you, the User, indicate that you understand and accept these
                                Terms
                                and Conditions and our Privacy Notice (collectively &#34;the Agreement&#34;) and that
                                you agree to be
                                legally bound by them. If you do not agree to these Terms and Conditions, please
                                discontinue
                                your use of the Services.
                            </p>
                            <p className="mt-4">
                                Please note that ECFMG reserves the right to change the Terms and Conditions under which
                                the Services and their offerings are extended to you. Your continued use of the Services
                                following reasonable notice of such modifications (including by e-mail or by updating
                                the
                                date at the top of this page) will be deemed acceptance of any changes to these Terms
                                and
                                Conditions.
                            </p>
                        </section>
                        <section>
                            <ol className="list-decimal space-y-6 pl-6">
                                <li>
                                    <span className="font-semibold underline">Grant of License.</span> This Agreement provides
                                    you,
                                    the User, with a personal, revocable, nonexclusive, nontransferable license to use
                                    the
                                    Services conditioned on your continued compliance with the Terms and Conditions of
                                    this
                                    Agreement. Users may print and download materials and information from the Services
                                    solely
                                    for personal and noncommercial use, provided that all hard copies contain all
                                    copyright and
                                    other applicable notices contained in such materials and information.
                                    Notwithstanding the
                                    foregoing and except as otherwise expressly permitted herein, a User may not modify,
                                    copy,
                                    distribute, broadcast, transmit, reproduce, publish, license, transfer, sell,
                                    scrape, mirror,
                                    frame, or otherwise use any information or material obtained from or through the
                                    Services.
                                    As a further condition of use of the Services, all Users warrant to ECFMG that they
                                    will
                                    not use the Services for any purpose that is unlawful, prohibited by any applicable
                                    regulation or is otherwise inconsistent with these Terms and Conditions.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Eligibility for Use of Services.</span> To use the
                                    Services,
                                    you must be, and represent and warrant that you are, 18 years of age or older and
                                    able
                                    to agree with the Terms and Conditions. If you are agreeing to these Terms and
                                    Conditions
                                    on behalf of an organization or entity, you represent and warrant that you are
                                    authorized
                                    to agree and bind such organization or entity to these Terms and Conditions
                                    (in which case, the references to &#34;you&#34; and &#34;your&#34; in this
                                    Agreement,
                                    except for in this clause, refer to that organization or entity). If ECFMG has
                                    previously
                                    prohibited you from accessing or using the Services, you are not eligible to access
                                    or
                                    use the Services.
                                </li>

                                <li>
                                    <span className="font-semibold underline">User Accounts.</span> Your use of certain portions
                                    of the Services may require you to create a User Account, which requires a User ID,
                                    password, and, in some cases, answers to challenge questions. Anyone with knowledge
                                    of your User ID, password and the answers to your challenge questions, if
                                    applicable,
                                    can gain access to the restricted portions of the Services, your account and/or
                                    other
                                    information, and transactions available to you. Accordingly, you must keep your User
                                    Account information confidential. By agreeing to these Terms and Conditions, you
                                    agree
                                    to be solely responsible for the confidentiality and use of your User Account
                                    information,
                                    as well as for any communications entered through the Services using these
                                    authentication
                                    items. You agree to (a) immediately notify ECFMG of any unauthorized access or use
                                    of your
                                    User Account or any other breach of security, and (b) exit your User Account at the
                                    end of
                                    each session. ECFMG reserves the right to delete or change a User&#39;s Account
                                    information at
                                    any time and for any reason. ECFMG cannot and will not be liable for any loss or
                                    damage arising
                                    from your failure to comply with this Section 3.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Privacy Notice.</span> You understand that your use
                                    of the Services may require the transmission of information that may be considered
                                    personal data. Please see Intealth&lsquo;s Privacy Notice for a summary of
                                    Intealth&lsquo;s
                                    and its member organizations&lsquo;, ECFMG&lsquo;s and FAIMER&lsquo;s, practices
                                    regarding how we collect, use, and share the data we collect from and about you.
                                    Acceptance of these Terms and Conditions constitutes consent to Intealth&lsquo;s
                                    Privacy Notice.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Accuracy of Account Information and Data.</span>
                                    You have the sole responsibility for the accuracy, quality, integrity, legality,
                                    and reliability of all data you provide to ECFMG. You understand that your account
                                    information is current as of the date indicated and is not a definitive statement of
                                    your account. ECFMG will not be liable for any loss, cost, expense, or other
                                    liability
                                    arising out of any such data you provide to ECFMG.
                                </li>

                                <li>
                                    <span
                                        className="font-semibold underline">Notices, Communications, and Electronic Signatures.</span>
                                    You agree to accept all communications from ECFMG regarding use of the Services at
                                    the addresses
                                    you provide to ECFMG.

                                    <div className="mt-4 space-y-4">
                                        <p>
                                            For applicants for USMLE examinations and/or ECFMG Certification, please
                                            promptly
                                            update any changes to your information by accessing ECFMG&lsquo;s On-line
                                            Applicant Status and Information System (OASIS).
                                        </p>

                                        <p>
                                            If you are subscribed to one or more of ECFMG&lsquo;s e-mail newsletters,
                                            such as
                                            The ECFMG® Reporter, and your e-mail address changes, you must update your
                                            e-mail
                                            address for each e-newsletter. To update your e-mail address in your
                                            e-newsletter
                                            subscription(s), visit the Publications page of the ECFMG Web Site at
                                            https://www.ecfmg.org/resources/publications.html, click on the
                                            newsletter(s)
                                            you receive, unsubscribe your old e-mail address, and subscribe your new
                                            e-mail address.
                                        </p>

                                        <p>
                                            For applicants for employment, please promptly update any changes to your
                                            information by accessing the on-line employment application at
                                            https://www.ecfmg.org/about/careers.html.
                                        </p>

                                        <p>
                                            Users of the ECFMG Medical School Web Portal (EMSWP) can request updates to
                                            their e-mail addresses by contacting their medical school&lsquo;s EMSWP
                                            Coordinator. The EMSWP Coordinator can request such changes for all Users at
                                            the medical school by accessing EMSWP at https://emswp.ecfmg.org. The
                                            medical
                                            school&lsquo;s EMSWP Coordinator can also request such changes by contacting
                                            ECFMG&lsquo;s EMSWP Administrator by e-mail at emswpadmin@ecfmg.org.
                                            ECFMG&lsquo;s
                                            EMSWP Administrator will review these requests and, if approved, implement
                                            the requested changes.
                                        </p>

                                        <p>
                                            Users of the Electronic Portfolio of International Credentials (EPIC)
                                            Physician Portal can update their e-mail addresses by accessing EPIC at
                                            https://epic.ecfmgepic.org. Users of the EPIC Report Portal can request
                                            updates to their e-mail addresses by contacting their organization&lsquo;s
                                            EPIC Coordinator. The organization&lsquo;s EPIC Coordinator can request
                                            such changes for all Users at the organization by contacting EPIC Support
                                            Services at ECFMG at info@ecfmgepic.org.
                                        </p>

                                        <p>
                                            Users of GEMx Electives can update their contact information, including
                                            e-mail address, by accessing their account at
                                            https://students.gemxelectives.org.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <span className="font-semibold underline">On-line Employment Applications.</span>
                                    You may search for employment opportunities and apply for employment with Intealth
                                    and its member organizations, ECFMG and FAIMER, through the ECFMG Web Site at
                                    www.ecfmg.org. You agree to provide complete and accurate responses to all questions
                                    on the on-line employment application. You agree to be bound by all of the
                                    provisions
                                    set forth in the on-line employment application, including
                                    the &#34;Applicant&lsquo;s Statement.&#34;
                                </li>

                                <li>
                                    <span className="font-semibold underline">Intellectual Property Rights.</span>
                                    All material contained in the Services, unless otherwise indicated, is owned by
                                    ECFMG and protected by law including, but not limited to, United States copyright,
                                    trade secret, and trademark law, as well as other state, national, and international
                                    laws and regulations. Except as expressly provided herein, ECFMG does not grant any
                                    express or implied right(s) to Users of the Services. Copyright and other
                                    proprietary
                                    rights in the Services, or portions thereof, may be held by individuals and/or
                                    entities
                                    other than ECFMG. Removing or altering the copyright notice on any material in the
                                    Services is prohibited. ECFMG owns a copyright in the Services as collective works
                                    and/or compilations, and in the selection, coordination, arrangement, and
                                    enhancement
                                    of the Services&lsquo; content. Intealth, ECFMG®, CSA®, FAIMER®, EPICSM, GEMxSM,
                                    ECHOSM,
                                    the Intealth logo, the ECFMG logo, the EPIC logo, the GEMx logo, the ECHO logo,
                                    and all other trademarks, names, logos, and icons identifying Intealth, ECFMG or
                                    ECFMG&lsquo;s products are proprietary marks of ECFMG, or their respective owners.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Compliance with Applicable Laws.</span>
                                    User&lsquo;s access to the Services is governed by all applicable federal, state,
                                    and local laws.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Code of Conduct.</span> You agree not to do any of
                                    the following:
                                    <ul className="list-disc pl-8 mt-4 space-y-2">
                                        <li>Restrict or inhibit any other authorized user from using and enjoying the
                                            Services. This includes, without limitation: (a) using, or attempting to
                                            use, any account without the owner&lsquo;s permission, or (b) obtaining or
                                            soliciting another person&lsquo;s password or other personal information
                                            under false pretenses.
                                        </li>
                                        <li>Impersonate any individual or entity.</li>
                                        <li>Interfere (or attempt to interfere) with the operation of the Services. This
                                            includes, without limitation, interfering with, defeating, or circumventing
                                            any security function of the Services, or attempting to do so.
                                        </li>
                                        <li>Post, store, or transmit any knowingly inaccurate or misleading personal,
                                            financial, or organizational information.
                                        </li>
                                        <li>Post, store, or transmit any unlawful, threatening, defamatory, obscene,
                                            inflammatory, pornographic, profane, or otherwise objectionable (as
                                            determined by ECFMG) information or material. ECFMG reserves the right to
                                            edit or delete information or material that it determines to be
                                            objectionable.
                                        </li>
                                        <li>Post, store, or transmit any information or material that could constitute
                                            or encourage conduct that would be considered a criminal offense, give rise
                                            to civil liability, or otherwise violate any law.
                                        </li>
                                        <li>Use the Services to post, store, or transmit any information or software
                                            that contains a virus, worm, Trojan horse, or other harmful or disruptive
                                            component.
                                        </li>
                                        <li>Use the Services to post, store, or transmit materials in violation of
                                            another party&lsquo;s copyright or other intellectual property rights. You
                                            are solely responsible for determining whether any material you post, store,
                                            or transmit is subject to a third party&lsquo;s rights.
                                        </li>
                                        <li>Use the Services to post, store, or transmit materials in violation of
                                            another party&lsquo;s privacy or publicity rights. This includes, without
                                            limitation, posting, storing, or transmitting images without obtaining the
                                            permission of individuals identifiable in the images.
                                        </li>
                                        <li>Use the Services for any unlawful purpose.</li>
                                        <li>Modify, adapt, sublicense, translate, resell, retransmit, reverse engineer,
                                            decompile, or disassemble any portion of the Services.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <span className="font-semibold underline">Termination.</span> The Agreement will continue to
                                    apply until terminated by either you or ECFMG. Without limiting the foregoing, ECFMG
                                    has the right to immediately terminate or suspend your access to the Services for
                                    any violation of the Agreement at any time with or without notice.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Assumption of Risk.</span> Use of the Internet and
                                    the Services is solely at your own risk and is subject to all applicable local,
                                    state, national, and international laws and regulations. While ECFMG has endeavored
                                    to create secure and reliable Services, please be advised that the confidentiality
                                    of any communication or material transmitted to/from the Services over the Internet
                                    cannot be guaranteed. Accordingly, ECFMG and its employees, agents, directors,
                                    officers, proprietors, partners, representatives, shareholders, servants, attorneys,
                                    predecessors, successors, and assigns are not responsible for the security of any
                                    information transmitted via the Internet. The User assumes sole and complete risk
                                    for using the Services and must make his or her own determination as to these
                                    matters.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Law Enforcement.</span> ECFMG reserves the right to
                                    view, monitor, and record activity in the Services without notice or permission from
                                    you. Any information obtained by monitoring, reviewing, or recording is subject to
                                    review by law enforcement organizations in connection with investigation or
                                    prosecution of possible criminal activity in the Services. ECFMG will also comply
                                    with all court orders involving requests for such information.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Links to Other Sites.</span> ECFMG may offer links
                                    to other web sites (&#34;third-party sites&#34;) that may offer various products,
                                    services, and/or information. These links are for convenience only, and ECFMG Users
                                    should be aware that ECFMGvs Terms and Conditions do not govern use of these
                                    third-party web sites, and these sites may be governed by the third party&lsquo;s
                                    own terms and conditions, privacy policy, and other similar terms. ECFMG cannot
                                    ensure that users will be satisfied with any products or services offered and/or
                                    purchased from such third-party sites. Before proceeding with any transaction with
                                    any third-party site, whether the transaction is on-line or off-line, it shall be
                                    the sole responsibility of the User to conduct whatever investigation such User
                                    deems necessary and appropriate.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Events Beyond ECFMG&lsquo;s Control.</span> Users
                                    expressly absolve and release ECFMG from any claim of harm resulting from a cause
                                    beyond ECFMG&lsquo;s control including, but not limited to, failure of electronic or
                                    mechanical equipment or communication lines, telephone or other interconnect
                                    problems, computer viruses, unauthorized access, theft, operator errors, severe
                                    weather, earthquakes, or natural disasters, strikes or other labor problems, wars,
                                    terrorism, public health crises, or governmental restrictions.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Warranties Disclaimed.</span> WHILE ECFMG ENDEAVORS
                                    TO PROVIDE ACCURATE AND TIMELY INFORMATION, THE INFORMATION AVAILABLE IN THE
                                    SERVICES MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. MOREOVER, ECFMG MAY MAKE
                                    MODIFICATIONS AND/OR CHANGES IN THE SERVICES OR IN THE INFORMATION AVAILABLE IN THE
                                    SERVICES AT ANY TIME, FOR ANY REASON.

                                    <p className="mt-4">YOU, THE USER, ASSUME THE SOLE RISK OF MAKING USE OF, AND/OR
                                        RELYING ON, THE INFORMATION AVAILABLE IN OR THROUGH THE SERVICES. ECFMG MAKES NO
                                        REPRESENTATIONS ABOUT THE SUITABILITY, COMPLETENESS, TIMELINESS, AVAILABILITY,
                                        RELIABILITY, LEGALITY IN YOUR JURISDICTION, OR ACCURACY OF THE INFORMATION
                                        AVAILABLE IN OR THROUGH THE SERVICES FOR ANY PURPOSE. SUCH INFORMATION IS
                                        PROVIDED ON AN &#34;AS IS&#34; AND &#34;AS AVAILABLE&#34; BASIS WITHOUT WARRANTY
                                        OF ANY KIND, INCLUDING ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY,
                                        FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NONINFRINGEMENT.</p>

                                    <p className="mt-4">IN NO EVENT SHALL ECFMG BE LIABLE TO YOU OR ANY THIRD PARTY FOR
                                        ANY CLAIM, LOSS, OR DAMAGE, DIRECT OR INDIRECT, INCLUDING WITHOUT LIMITATION,
                                        COMPENSATORY, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING
                                        OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF THE SERVICES, INCLUDING BUT NOT
                                        LIMITED TO: ANY DELAY, INABILITY TO ACCESS OR USE, OR INTERRUPTION TO THE
                                        SERVICES; ANY DELAY, INABILITY TO ACCESS OR USE, OR INTERRUPTION TO YOUR
                                        ACCOUNT; UNAUTHORIZED USE OR MISUSE OF YOUR ACCOUNT; ANY INACCURACY OF DATA; ANY
                                        LOSS OF DATA; ANY INFORMATION AVAILABLE IN THE SERVICES, OR OTHERWISE ARISING
                                        OUT OF THE UTILIZATION OF THE SERVICES, WHETHER BASED IN CONTRACT, TORT, STRICT
                                        LIABILITY, OR OTHERWISE, EVEN IF ECFMG HAS BEEN ADVISED OF THE POSSIBILITY OF
                                        SUCH DAMAGES. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
                                        LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE
                                        LIMITATION MAY NOT APPLY. IN SUCH JURISDICTIONS, ECFMG&lsquo;S ENTIRE LIABILITY
                                        AND YOUR EXCLUSIVE REMEDY WITH RESPECT TO YOUR USE OF THE SERVICES SHALL NOT
                                        EXCEED $1,000.00.</p>
                                </li>

                                <li>
                                    <span className="font-semibold underline">Indemnity.</span> You agree to defend, indemnify,
                                    and hold harmless ECFMG and its affiliates and all of their employees, agents,
                                    directors, officers, proprietors, partners, representatives, shareholders, servants,
                                    attorneys, predecessors, successors, and assigns, from and against any and all
                                    claims, proceedings, damages, injuries, liabilities, losses, costs, and expenses
                                    (including reasonable attorneys&lsquo; fees and litigation expenses), relating to or
                                    arising from your use of the Services or any breach by you of this Agreement. ECFMG
                                    reserves the right, at its own expense, to assume the exclusive defense and control
                                    of any matter otherwise subject to indemnification by you and you shall not in any
                                    event settle any matter without the written consent of ECFMG. You agree to cooperate
                                    as fully as reasonably required in ECFMG&lsquo;s defense of any claim.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Submissions.</span> Through EMSWP&lsquo;s GEMx
                                    program, authorized institutional users may enter and publish images of and content
                                    about their institutions and the institutions&lsquo; programs. ECFMG also welcomes
                                    submissions in the form of feedback and suggestions about how to improve our
                                    products and Services. Any ideas, suggestions, information, know-how, material,
                                    images, or any other content (collectively, &#34;content&#34;) received through the
                                    Services, however, will be deemed to include a royalty-free, perpetual, irrevocable,
                                    nonexclusive right and license for ECFMG to adopt, publish, reproduce, disseminate,
                                    transmit, distribute, copy, use, edit, create derivative works, display, (in whole
                                    or part) worldwide, or act on such content without additional approval or
                                    consideration, in any form, media, or technology now known or later developed for
                                    the full term of any rights that may exist in such content, and User hereby waives
                                    any claim to the contrary.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Copyright Complaints.</span> We respond to notices
                                    of alleged copyright infringement under the Digital Millennium Copyright Act of 1998
                                    (the &#34;DMCA&#34;) to ensure that material from the Services does not infringe on
                                    the copyright, trademark, or other intellectual property rights of others. Notices
                                    to ECFMG regarding any alleged copyright infringement related to the Services should
                                    be directed to: Elizabeth Ingraham, Assistant Vice President, Communications &
                                    External Affairs, Intealth. E-mail: eingraham@intealth.org. Phone: (215) 823-2108.
                                    Facsimile: (215) 387-9963.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Governing Law.</span> This Agreement has been made
                                    in, and will be construed and enforced in accordance with the laws of the
                                    Commonwealth of Pennsylvania without regard to its conflicts of law principles. Any
                                    action to enforce this Agreement will be brought in the federal or state courts
                                    presiding in Pennsylvania, and all parties to this Agreement expressly agree to be
                                    subject to the jurisdiction of such courts. The Services are controlled and operated
                                    by ECFMG from its offices within the United States.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Waiver.</span> Failure to insist on strict
                                    performance of any of the Terms and Conditions of this Agreement will not operate as
                                    a waiver of any subsequent default or failure of performance. No waiver by ECFMG of
                                    any right under these Terms and Conditions will be deemed to be either a waiver of
                                    any other right or provision or a waiver of that same right or provision at any
                                    other time.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Severability.</span> If any part of this Agreement
                                    is determined to be invalid or unenforceable pursuant to applicable law including,
                                    but not limited to, the warranty disclaimers and the liability limitations set forth
                                    above, then the invalid or unenforceable provision will be deemed superseded by a
                                    valid, enforceable provision that most clearly matches the intent of the original
                                    provision and the remainder of this Agreement shall continue in effect.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Relationship.</span> No joint venture, partnership,
                                    employment, or agency relationship exists between a User and ECFMG as a result of
                                    this Agreement or User&lsquo;s utilization of the Services.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Anti-Hacking.</span> You may not, nor may you allow
                                    others to, directly or indirectly, attempt to or actually disrupt, impair or
                                    interfere with, alter or modify the Services or any content. You may not, nor may
                                    you allow others to, directly or indirectly, collect or attempt to collect any
                                    information about others, including, but not limited to passwords, account or other
                                    information.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Entire Agreement/Reservation of Rights.</span> These
                                    Terms and Conditions, together with the Intealth Privacy Notice, which is hereby
                                    incorporated as if set forth fully herein, represent the entire Agreement between
                                    the User and ECFMG with respect to use of and material available in or through the
                                    Services, and supersede all prior or contemporaneous communications and proposals,
                                    whether electronic, oral, or written between the User and ECFMG with respect to the
                                    Services. Any rights not expressly granted herein are reserved.
                                </li>

                                <li>
                                    <span className="font-semibold underline">Additional Assistance.</span> If you have any
                                    questions or concerns about these Terms and Conditions, please contact Elizabeth
                                    Ingraham, Assistant Vice President, Communications & External Affairs, Intealth.
                                    E-mail: eingraham@intealth.org. Phone: (215) 823-2108. Facsimile: (215) 387-9963.
                                </li>
                            </ol>
                            <p className="text-black mt-4">
                                Last Updated: May 6, 2022
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
                            I Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
