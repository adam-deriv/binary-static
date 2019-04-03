import { localize } from '_common/localize';

export const getContractTypeDisplay = () => ({
    ASIANU      : localize('Asian Up'),
    ASIAND      : localize('Asian Down'),
    CALL        : localize('Higher'),
    CALLE       : localize('Higher or equal'),
    PUT         : localize('Lower'),
    PUTE        : localize('Lower or equal'),
    DIGITMATCH  : localize('Matches'),
    DIGITDIFF   : localize('Differs'),
    DIGITODD    : localize('Odd'),
    DIGITEVEN   : localize('Even'),
    DIGITOVER   : localize('Over'),
    DIGITUNDER  : localize('Under'),
    EXPIRYMISS  : localize('Ends Outside'),
    EXPIRYRANGE : localize('Ends Between'),
    EXPIRYRANGEE: localize('Ends Between'),
    LBFLOATCALL : localize('Close-Low'),
    LBFLOATPUT  : localize('High-Close'),
    LBHIGHLOW   : localize('High-Low'),
    RANGE       : localize('Stays Between'),
    UPORDOWN    : localize('Goes Outside'),
    ONETOUCH    : localize('Touch'),
    NOTOUCH     : localize('No Touch'),
});
