import { PylonProps, RawPylonProps } from 'types';
import { removeUndefined } from 'utils';

export const mapPylonPropsToRawPylonProps = (
  pylonProps?: Partial<PylonProps>,
): RawPylonProps => {
  return removeUndefined({
    app_id: pylonProps?.appId,
    email: pylonProps?.email,
    name: pylonProps?.name,
    avatar_url: pylonProps?.avatarUrl,
    email_hash: pylonProps?.emailHash,
    account_id: pylonProps?.accountId,
    account_external_id: pylonProps?.accountExternalId,
  });
};
