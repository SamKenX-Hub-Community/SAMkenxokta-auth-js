/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { PageWithTitle } from './Page';


class EnrollOktaVerifyAuthenticator extends PageWithTitle {
  title = 'Enroll Okta Verify';

  get code() { return '#authenticator-code-input'; }
  get submit() { return '#select-enrollment-channel-form button[type=submit]'; }
  get qrCode() { return '#authenticator-qr-code'; }
  get enrollWithAnotherMethod() { return '#select-enrollment-channel-form button[type=submit]'; }
}

export default new EnrollOktaVerifyAuthenticator();
