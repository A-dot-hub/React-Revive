import PackageCard from './PackageCard';

export default function PackageSection({ packages }) {
  return (
    <div className="container mx-auto p-4" id="packages">
      <h2 className="text-2xl font-bold mb-4">Tour Packages</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {packages.map(pkg => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
