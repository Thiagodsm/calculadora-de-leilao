import { useEffect } from 'react';
import { adsenseConfig } from '../../config/adsense';

interface AdSlotProps {
  slotId: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
}

export default function AdSlot({ slotId, format = 'auto', className }: AdSlotProps) {
  useEffect(() => {
    if (!adsenseConfig.enabled) return;
    try {
      ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
    } catch {
      // silently ignore AdSense push errors
    }
  }, []);

  if (!adsenseConfig.enabled) return null;

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsenseConfig.clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
