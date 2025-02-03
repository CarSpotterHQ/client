import React, { useState } from 'react';
import PenaltyChoice from '@/components/penalty/PenaltyChoice';
import PenaltySetting from '@/components/penalty/PenaltySetting';
import SubMain from '@/components/penalty/SubMain';
import TimeSetting from '@/components/penalty/TimeSetting';

const PenaltyPage = () => {
  // const [registerData, setRegisterData] = useState();
  const [step, setStep] = useState<'subMain' | 'timeSetting' | 'penaltyChoice' | 'penaltySetting'>('subMain');

  return (
    <div>
      {step === 'subMain' && <SubMain onNext={() => setStep('timeSetting')} />}
      {step === 'timeSetting' && <TimeSetting onNext={() => setStep('penaltyChoice')} />}
      {step === 'penaltyChoice' && <PenaltyChoice onNext={() => setStep('penaltySetting')} />}
      {step === 'penaltySetting' && <PenaltySetting />}
    </div>
  );
};

export default PenaltyPage;
