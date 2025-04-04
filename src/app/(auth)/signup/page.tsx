import { tempService } from '@/actions/signup-service';
import { Button } from '@/components/ui/button';
import PolicyAgreementPage from '@/components/pages/auth/signup/PolicyAgreementPage';
import SignUpStep1 from '@/components/pages/auth/signup/SignUpStep1';
export default function Signup() {
  return (
    <main>
      <form action={tempService}>
        <SignUpStep1 />
        <PolicyAgreementPage />
        <Button type="submit" />
      </form>
    </main>
  );
}
